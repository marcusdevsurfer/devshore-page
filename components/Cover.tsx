import ColorBends from '@/components/ColorBends';
import TextType from '@/components/TextType';

export default function Cover() {
    return (
        <div
            className="relative w-full h-screen bg-black overflow-hidden"
            aria-label="Hero section con animación de texto"
        >
            <div
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center"
                style={{ willChange: 'transform' }}
            >
                <TextType
                    className="text-gray-100 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl animate-in fade-in duration-1500"
                    as="h1"
                    text={["Innovación", "Transformación Digital", "Dev Shore..."]}
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