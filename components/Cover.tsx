import PixelBlast from '@/components/PixelBlast';
import TextType from '@/components/TextType';

export default function Cover() {
    return (
        <section
            className="relative w-full min-h-screen bg-black overflow-hidden"
            aria-label="Hero section con animación de texto"
        >
            <div
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center animate-in fade-in duration-1000"
                style={{ willChange: 'transform' }}
            >
                <TextType
                    className="text-gray-100 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
                    as="h1"
                    text={["Creatividad", "Flow", "DevShore"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>
            <PixelBlast
                className="min-h-screen w-full"
                variant="circle"
                pixelSize={6}
                color="#1166ee"
                patternScale={2}
                patternDensity={1.2}
                pixelSizeJitter={0}
                enableRipples
                rippleSpeed={0.4}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid
                liquidStrength={0.12}
                liquidRadius={1.2}
                liquidWobbleSpeed={5}
                speed={0.6}
                edgeFade={0.25}
            />
        </section>
    )
}