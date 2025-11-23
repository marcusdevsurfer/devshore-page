'use client';
import LetterGlitch from "@/components/LetterGlitch";

// SVG Icons
const MailIcon = () => (
    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-2.071 1.679-3.75 3.75-3.75h12c2.071 0 3.75 1.679 3.75 3.75v10.5c0 2.071-1.679 3.75-3.75 3.75H6c-2.071 0-3.75-1.679-3.75-3.75V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 6.75h.008v.008h-.008V6.75z" />
    </svg>
);

export default function Contact() {
    return (
        <section className="relative w-full bg-black pt-15 pb-20">
            <div className="absolute z-0 w-full h-full top-0 left-0">
                <LetterGlitch
                    glitchColors={["#1e40af", "#1a1a1a", "#3a3a3a"]}
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[400px] gap-8">
                {/* Título minimalista */}
                <h2 className="text-2xl md:text-4xl text-gray-300">
                    Contacto
                </h2>

                {/* Links de contacto - solo iconos */}
                <div className="flex items-center gap-8">
                    {/* Instagram */}
                    <a
                        href="https://instagram.com/dev.shore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group hover:text-white transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}
