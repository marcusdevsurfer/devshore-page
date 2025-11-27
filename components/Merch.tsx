'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
    {
        id: 1,
        name: "Playera Dev Shore - Pulpo Multitasking",
        price: 300,
        category: 'tshirt',
        images: {
            front: "/tshirt-front-1.png",
            back: "/design-back-1.png"
        },
        sizes: ["S", "M", "L", "XL"],
        stock: 99
    },
    {
        id: 2,
        name: "Playera Dev Shore - Cangrejo Bitcoin Miner",
        price: 300,
        category: 'tshirt',
        images: {
            front: "/tshirt-front-1.png",
            back: "/design-back-2.png"
        },
        sizes: ["S", "M", "L", "XL"],
        stock: 99
    },
    {
        id: 3,
        name: "Termo Dev Shore",
        price: 120,
        category: 'accessory',
        images: {
            front: "/",
            back: "/"
        },
        //sizes: ["S", "M", "L", "XL"],
        stock: 20
    }
];

function ProductCard({ product }: { product: typeof products[0], index: number }) {
    const [showBack, setShowBack] = useState(false);

    return (
        <div
            className="group rounded-xl relative mt-24 backdrop-blur-xl bg-white/2 border border-white/10 hover:border-blue-400/30 animate-in fade-in slide-in-from-bottom-8 duration-700 overflow-hidden"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-blue-800/5 via-transparent to-transparent" />
            </div>

            <div className="relative">
                {/* Imagen del producto */}
                <div className="relative aspect-square bg-linear-to-br from-gray-900/20 to-black/50 overflow-hidden p-8 flex items-center justify-center">
                    <div className="relative w-4/5 h-4/5">
                        <Image
                            src={showBack ? product.images.back : product.images.front}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100 drop-shadow-[0_0_10px_rgba(95,168,245,0.5)]  group-hover:drop-shadow-[0_10px_15px_rgba(95,168,245,0.5)]"
                        />
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Stock badge */}
                    <div className="absolute top-3 right-3 backdrop-blur-md bg-black/30 border border-white/10 px-2 py-1 flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${product.stock > 5 ? 'bg-green-400' : 'bg-yellow-400'}`} />
                        <span className="text-[10px] text-gray-300 uppercase tracking-wider">{product.stock}</span>
                    </div>

                    {
                        product?.category === 'tshirt' &&
                        < div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            <button
                                onClick={() => setShowBack(false)}
                                className={`backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-wider transition-all duration-300 ${!showBack
                                    ? 'bg-blue-500/30 border border-blue-400/50 text-white'
                                    : 'bg-black/30 border border-white/10 text-gray-400 hover:text-white'
                                    }`}
                            >
                                Frente
                            </button>
                            <button
                                onClick={() => setShowBack(true)}
                                className={`backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-wider transition-all duration-300 ${showBack
                                    ? 'bg-blue-500/30 border border-blue-400/50 text-white'
                                    : 'bg-black/30 border border-white/10 text-gray-400 hover:text-white'
                                    }`}
                            >
                                Atrás
                            </button>
                        </div>
                    }
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-base font-light text-gray-300 group-hover:text-white transition-colors duration-300">
                            {product.name}
                        </h3>
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-2xl font-light text-white">
                                ${product.price}
                            </span>
                            <span className="text-xs text-gray-600">MXN</span>
                        </div>
                    </div>

                    {
                        product?.category == 'tshirt' &&
                        < div className="flex gap-1.5">
                            {product.sizes.map((size) => (
                                <span
                                    key={size}
                                    className="flex-1 text-center text-[10px] text-gray-400 backdrop-blur-sm bg-white/3 border border-white/5 hover:border-blue-500/30 py-1.5 transition-all duration-300"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    }

                    <a
                        href="https://instagram.com/dev.shore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2.5 text-xs text-center text-gray-400 backdrop-blur-sm bg-white/2 border border-white/10 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/5 transition-all duration-300 uppercase tracking-wider"
                    >
                        Contactar para comprar
                    </a>
                </div>
            </div>
        </div >
    );
}

export default function Merch() {
    return (
        <section className="relative w-full bg-black px-4 my-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200 mb-3">
                        Merch
                    </h2>
                    <div className="w-12 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* Nota informativa */}
                <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-xs text-gray-400 uppercase tracking-widest hover:text-blue-100/90 hover:text-shadow-2xl hover:text-shadow-white transition-colors duration-700">Contacto vía redes sociales</p>
                </div>
            </div>
        </section>
    );
}
