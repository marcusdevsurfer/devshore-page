import LetterGlitch from "@/components/LetterGlitch";

const InstagramIcon = () => (
    <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-2.071 1.679-3.75 3.75-3.75h12c2.071 0 3.75 1.679 3.75 3.75v10.5c0 2.071-1.679 3.75-3.75 3.75H6c-2.071 0-3.75-1.679-3.75-3.75V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 6.75h.008v.008h-.008V6.75z" />
    </svg>
);

export default function Contact() {
    return (
        <section className="relative h-full w-full bg-black p-20 animate-in fade-in duration-1000">
            <div className="absolute z-0 w-full h-full top-0 left-0">
                <LetterGlitch
                    glitchColors={["#5fa8f5", "#0961ed", "#16181c"]}
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[400px] gap-8">
                <h2 className="text-2xl md:text-4xl text-gray-300">
                    {`Hey`}<span className="animate-pulse">_</span>
                </h2>
                <div className="flex items-center gap-8">
                    <a
                        href="https://instagram.com/dev.shore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(95,168,245,0.5)]"
                        aria-label="Instagram"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}
