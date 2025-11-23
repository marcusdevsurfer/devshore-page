import { 
  Space_Grotesk, 
  Space_Mono, 
  Orbitron, 
  Rajdhani, 
  JetBrains_Mono,
  IBM_Plex_Mono,
  Syne
} from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });
const rajdhani = Rajdhani({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export default function FontShowcase() {
    const fonts = [
        {
            name: "Space Grotesk",
            font: spaceGrotesk,
            description: "Moderna, geométrica, tech",
            type: "Principal"
        },
        {
            name: "Space Mono",
            font: spaceMono,
            description: "Monoespaciada, futurista",
            type: "Monospace"
        },
        {
            name: "Orbitron",
            font: orbitron,
            description: "Robótica clásica, muy tech",
            type: "Display"
        },
        {
            name: "Rajdhani",
            font: rajdhani,
            description: "Minimalista, moderna, tech",
            type: "Principal"
        },
        {
            name: "JetBrains Mono",
            font: jetbrainsMono,
            description: "Consola moderna, legible",
            type: "Monospace"
        },
        {
            name: "IBM Plex Mono",
            font: ibmPlexMono,
            description: "Profesional, tech",
            type: "Monospace"
        },
        {
            name: "Syne",
            font: syne,
            description: "Futurista, bold",
            type: "Display"
        }
    ];

    return (
        <section className="w-full bg-black px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-100 mb-12 text-center">
                    Vista previa de fuentes
                </h1>

                <div className="space-y-12">
                    {fonts.map((item) => (
                        <div 
                            key={item.name}
                            className="border border-gray-800 rounded-lg p-8 bg-gray-900/30"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-200">
                                        {item.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.description}
                                    </p>
                                </div>
                                <span className="text-xs text-gray-600 bg-gray-800 px-3 py-1 rounded-full">
                                    {item.type}
                                </span>
                            </div>

                            {/* Preview */}
                            <div className={item.font.className}>
                                {/* Título grande */}
                                <div className="mb-6">
                                    <h3 className="text-5xl md:text-6xl font-bold text-gray-100 mb-2">
                                        DevShore
                                    </h3>
                                    <p className="text-2xl md:text-3xl font-medium text-gray-300">
                                        Innovación Digital
                                    </p>
                                </div>

                                {/* Texto mediano */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold text-gray-200 mb-2">
                                        Desarrollo de Software Moderno
                                    </h4>
                                    <p className="text-base text-gray-400">
                                        Transformamos ideas en experiencias digitales excepcionales. 
                                        Nuestro equipo combina creatividad, tecnología y estrategia.
                                    </p>
                                </div>

                                {/* Código/Monospace */}
                                <div className="bg-black/50 rounded p-4 border border-gray-800">
                                    <code className="text-sm text-gray-300">
                                        const devshore = &#123; innovation: true, quality: 100 &#125;;
                                    </code>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para cerrar */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500">
                        Scroll para ver todas las opciones
                    </p>
                </div>
            </div>
        </section>
    );
}
