'use client';

// SVG Icons
const MailIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-2.071 1.679-3.75 3.75-3.75h12c2.071 0 3.75 1.679 3.75 3.75v10.5c0 2.071-1.679 3.75-3.75 3.75H6c-2.071 0-3.75-1.679-3.75-3.75V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 6.75h.008v.008h-.008V6.75z" />
    </svg>
);

export default function Contact() {
    return (
        <section className="relative w-full bg-black flex items-center justify-center px-4 py-32">
            <div className="relative z-10 max-w-2xl w-full text-center">
                {/* Título minimalista */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200 mb-3">
                        Contacto
                    </h2>
                    <div className="w-12 h-px bg-gray-700 mx-auto" />
                </div>

                {/* Links de contacto minimalistas */}
                <div className="flex flex-col gap-8">
                    {/* Email */}
                    <a 
                        href="mailto:hola@devshore.com"
                        className="group flex items-center justify-center gap-3 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                    >
                        <MailIcon />
                        <span className="text-lg">hola@devshore.com</span>
                    </a>

                    {/* Instagram */}
                    <a 
                        href="https://instagram.com/dev.shore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                    >
                        <InstagramIcon />
                        <span className="text-lg">@dev.shore</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
