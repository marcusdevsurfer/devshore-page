import PixelBlast from '@/components/PixelBlast';
import ColorBends from '@/components/ColorBends';
import TextType from '@/components/TextType';

export default function Cover() {
    return (
        <div
            className="relative w-full h-screen bg-black overflow-hidden"
            aria-label="Hero section con animación de texto"
        >
            <div
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center animate-in fade-in duration-1000"
                style={{ willChange: 'transform' }}
            >
                <TextType
                    className="text-gray-100 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
                    as="h1"
                    text={["Innovación", "Transformación Digital", "Dev Shore"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>
            <ColorBends
                className="absolute inset-0 w-full h-full"
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