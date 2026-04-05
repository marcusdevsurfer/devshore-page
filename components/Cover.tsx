import ColorBends from '@/components/ColorBends';
import TextType from '@/components/TextType';

export default function Cover() {
    return (
        <div
            className="relative w-full h-screen bg-black overflow-hidden"
            aria-label="Hero section con animación de texto"
        >
            {/* Announcement pill */}
            <div className="absolute top-8 left-1/2 z-20 -translate-x-1/2">
                <a
                    href="#merch"
                    className="group flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-blue-500/60 bg-white/5 px-3 py-1.5 sm:px-5 sm:py-2 backdrop-blur-md animate-bounce transition-all duration-500 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(96,165,250,0.35)]"
                >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                    <span className="text-[9px] sm:text-[11px] font-light uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-white">
                        <span className="sm:hidden">Nueva mercanc&iacute;a</span>
                        <span className="hidden sm:inline">Explora nuestra nueva mercancía — playeras exclusivas</span>
                    </span>
                    <svg
                        className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center"
                style={{ willChange: 'transform' }}
            >
                <TextType
                    className="text-gray-100 font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl animate-in fade-in duration-1500"
                    as="h1"
                    text={["Inovación", "Transformación Digital", "Dev Shore..."]}
                    typingSpeed={80}
                    pauseDuration={600}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-gray-300">
                    <span className="text-xs tracking-widest">SCROLL</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
            <ColorBends
                className="absolute inset-0 w-full h-full animate-in fade-in duration-1000"
                colors={["#0924aa", "#4b68fb", "#2a2a2c"]}
                rotation={0}
                speed={0.2}
                scale={1}
                frequency={1}
                warpStrength={1}
                mouseInfluence={1}
                parallax={0.6}
                noise={0.3}
                transparent
            />
        </div>
    )
}