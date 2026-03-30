import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

function quoteSheetName(name: string) {
    return `'${name.replace(/'/g, "''")}'`;
}

async function resolveAppendRange(
    sheets: ReturnType<typeof google.sheets>,
    spreadsheetId: string,
    preferredSheetName = 'Pedidos',
) {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId, fields: 'sheets.properties.title' });
    const titles = (spreadsheet.data.sheets || [])
        .map((sheet) => sheet.properties?.title)
        .filter((title): title is string => Boolean(title));

    if (titles.length === 0) {
        throw new Error('El spreadsheet no contiene hojas');
    }

    const targetTitle = titles.find((title) => title === preferredSheetName) || titles[0];
    return `${quoteSheetName(targetTitle)}!A:J`;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { nombre, email, telefono, producto, talla, cantidad, notas, precio } = body;

        const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
            return NextResponse.json(
                { error: 'Faltan variables de entorno de Google Sheets' },
                { status: 500 },
            );
        }

        // Validar campos requeridos
        if (!nombre || !email || !telefono || !producto) {
            return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
        }

        // Validar formato de email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Formato de email inválido' }, { status: 400 });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: serviceAccountEmail,
                private_key: privateKey.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const fecha = new Date().toLocaleString('es-MX', {
            timeZone: 'America/Mexico_City',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        const preferredSheetName = process.env.GOOGLE_SHEET_TAB?.trim();
        const appendRange = preferredSheetName
            ? `${quoteSheetName(preferredSheetName)}!A:J`
            : await resolveAppendRange(sheets, spreadsheetId, 'Pedidos');

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: appendRange,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[
                    fecha,
                    String(nombre).substring(0, 100),
                    String(email).substring(0, 100),
                    String(telefono).substring(0, 20),
                    String(producto).substring(0, 100),
                    talla ? String(talla).substring(0, 10) : '',
                    cantidad ? String(Number(cantidad) || 1) : '1',
                    precio ? `$${precio} MXN` : '',
                    notas ? String(notas).substring(0, 500) : '',
                    'Pendiente',
                ]],
            },
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        const apiError = error as {
            code?: number;
            message?: string;
            response?: { data?: { error?: { message?: string } } };
        };

        if (apiError.code === 403) {
            return NextResponse.json(
                {
                    error: 'La cuenta de servicio no tiene acceso al Google Sheet. Compártelo como Editor con GOOGLE_SERVICE_ACCOUNT_EMAIL.',
                },
                { status: 403 },
            );
        }

        console.error('[orders] Error al guardar pedido:', error);
        return NextResponse.json(
            {
                error: apiError.response?.data?.error?.message || apiError.message || 'Error al procesar el pedido',
            },
            { status: 500 },
        );
    }
}
