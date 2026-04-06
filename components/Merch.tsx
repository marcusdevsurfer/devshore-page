'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';

type ProductImages = {
    front: string;
    back: string;
};

type ProductVariant = {
    id: 'black' | 'white' | 'blackk';
    label: string;
    swatchClassName: string;
    images: ProductImages;
};

type Product = {
    id: number;
    name: string;
    price: number;
    category: 'tshirt';
    images?: ProductImages;
    variants?: ProductVariant[];
    sizes: string[];
    stock: number;
};

const products: Product[] = [
    {
        id: 1,
        name: "Playera - Reef Tech",
        price: 320,
        category: 'tshirt',
        images: {
            front: "/shirts/reef-front.png",
            back: "/shirts/reef-back.png"
        },
        sizes: ["S", "M", "L", "XL"],
        stock: 25
    },
    {
        id: 2,
        name: "Playera - Skull Waves",
        price: 320,
        category: 'tshirt',
        variants: [
            {
                id: 'black',
                label: 'Negra',
                swatchClassName: 'bg-neutral-950',
                images: {
                    front: "/shirts/wavedev-front.png",
                    back: "/shirts/wavedev-back.png"
                }
            },
            {
                id: 'white',
                label: 'Blanca',
                swatchClassName: 'bg-white',
                images: {
                    front: "/shirts/wavedev-white-front.png",
                    back: "/shirts/wavedev-white-back.png"
                }
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        stock: 25
    },
    {
        id: 3,
        name: "Playera - Maniak Spider",
        price: 320,
        category: 'tshirt',
        variants: [
            {
                id: 'black',
                label: 'Negra',
                swatchClassName: 'bg-neutral-950',
                images: {
                    front: "/shirts/spider-front.png",
                    back: "/shirts/spider-back.png"
                }
            },
            {
                id: 'white',
                label: 'Blanca',
                swatchClassName: 'bg-white',
                images: {
                    front: "/shirts/spider-white-front.png",
                    back: "/shirts/spider-white-back.png"
                }
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        stock: 25
    },
    {
        id: 4,
        name: "Sea Connection",
        price: 320,
        category: 'tshirt',
        // images: {
        //     front: "/shirts/seaconnection-front.png",
        //     back: "/shirts/seaconnection-back.png"
        // },
        variants: [
            {
                id: 'black',
                label: 'Negra / Azul',
                swatchClassName: 'bg-blue-950',
                images: {
                    front: "/shirts/seaconnection-blue-front.webp",
                    back: "/shirts/seaconnection-blue-back.webp"
                }
            },
            {
                id: 'blackk',
                label: 'Negra / Verde',
                swatchClassName: 'bg-green-950',
                images: {
                    front: "/shirts/seaconnection-green-front.webp",
                    back: "/shirts/seaconnection-green-back.webp"
                }
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        stock: 25
    },
    {
        id: 5,
        name: "Rest In Surf",
        price: 320,
        category: 'tshirt',
        images: {
            front: "/shirts/restinsurf-front.png",
            back: "/shirts/restinsurf-back.png"
        },
        sizes: ["S", "M", "L", "XL"],
        stock: 25
    },
    {
        id: 6,
        name: "Mermaid Tech",
        price: 320,
        category: 'tshirt',
        images: {
            front: "/shirts/mermaid-front.webp",
            back: "/shirts/mermaid-back.webp"
        },
        sizes: ["S", "M", "L", "XL"],
        stock: 25
    }
];

function getActiveImages(product: Product, selectedVariant: ProductVariant['id'] | null) {
    if (product.variants?.length) {
        return product.variants.find((variant) => variant.id === selectedVariant)?.images ?? product.variants[0].images;
    }

    return product.images!;
}

function ProductCard({ product, onOrder }: { product: Product; onOrder: (product: Product, size: string, variant: ProductVariant['label'] | null) => void }) {
    const [showBack, setShowBack] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [sizeError, setSizeError] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant['id'] | null>(product.variants?.[0]?.id ?? null);

    const activeImages = getActiveImages(product, selectedVariant);
    const selectedVariantLabel = product.variants?.find((variant) => variant.id === selectedVariant)?.label ?? null;

    return (
        <div
            className="group rounded-xl relative mt-10 backdrop-blur-xl bg-white/2 border border-white/10 hover:border-blue-400/30 animate-in fade-in duration-700 overflow-hidden"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-blue-800/5 via-transparent to-transparent" />
            </div>

            <div className="relative">
                {/* Imagen del producto */}
                <div className="relative aspect-square bg-linear-to-br from-gray-900/20 to-black/50 overflow-hidden p-8 flex items-center justify-center">
                    <div className="relative w-4/5 h-4/5 animate-in">
                        <Image
                            src={showBack ? activeImages.back : activeImages.front}
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
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
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
                        {product.variants?.length ? (
                            <div className="flex items-center gap-2">
                                {product.variants.map((variant) => (
                                    <button
                                        key={variant.id}
                                        type="button"
                                        aria-label={`Seleccionar playera ${variant.label.toLowerCase()}`}
                                        title={variant.label}
                                        onClick={() => {
                                            setSelectedVariant(variant.id);
                                            setShowBack(false);
                                        }}
                                        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${selectedVariant === variant.id
                                            ? 'scale-110 border-blue-400/70 bg-blue-500/10 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]'
                                            : 'border-white/15 bg-white/5 hover:border-blue-500/40 hover:bg-white/10'
                                            }`}
                                    >
                                        <span
                                            className={`h-4 w-4 rounded-full border ${variant.id === 'white' ? 'border-neutral-300' : 'border-white/10'} ${variant.swatchClassName}`}
                                        />
                                    </button>
                                ))}
                                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                                    {selectedVariantLabel}
                                </span>
                            </div>
                        ) : null}
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-2xl font-light text-white">
                                ${product.price}.00
                            </span>
                            <span className="text-xs text-gray-600">MXN</span>
                        </div>
                    </div>

                    {
                        product?.category == 'tshirt' &&
                        <div className="space-y-1">
                            <div className="flex gap-1.5">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => { setSelectedSize(size === selectedSize ? '' : size); setSizeError(false); }}
                                        className={`flex-1 text-center text-[10px] backdrop-blur-sm border py-1.5 transition-all duration-300 ${selectedSize === size
                                            ? 'bg-blue-500/20 border-blue-400/60 text-white'
                                            : 'text-gray-400 bg-white/3 border-white/5 hover:border-blue-500/30 hover:text-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {sizeError && <p className="text-[10px] text-red-400 mt-0.5">Selecciona una talla</p>}
                        </div>
                    }

                    <button
                        type="button"
                        onClick={() => {
                            if (!selectedSize && product.category === 'tshirt') {
                                setSizeError(true);
                                return;
                            }
                            onOrder(product, selectedSize, selectedVariantLabel);
                        }}
                        className="block w-full py-2.5 text-xs text-center text-gray-400 backdrop-blur-sm bg-white/2 border border-white/10 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/5 transition-all duration-300 uppercase tracking-wider"
                    >
                        Hacer Pedido
                    </button>
                </div>
            </div>
        </div >
    );
}

function OrderModal({ product, size, variant, onClose }: { product: Product; size: string; variant: ProductVariant['label'] | null; onClose: () => void }) {
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '', cantidad: '1', notas: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nombre: form.nombre,
                    email: form.email,
                    telefono: form.telefono,
                    cantidad: form.cantidad,
                    notas: form.notas,
                    producto: variant ? `${product.name} - ${variant}` : product.name,
                    talla: size,
                    precio: product.price,
                }),
            });
            if (!res.ok) throw new Error('Error');
            setSuccess(true);
        } catch {
            setError('Ocurrió un error. Por favor intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md bg-black border border-white/10 p-8 animate-in fade-in slide-in-from-bottom-4 duration-300"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-sm leading-none"
                >
                    ✕
                </button>

                {success ? (
                    <div className="text-center py-8 space-y-4">
                        <div className="text-green-400 text-5xl font-thin">✓</div>
                        <h3 className="text-white font-light text-xl">¡Pedido registrado!</h3>
                        <p className="text-gray-400 text-sm">
                            Nos pondremos en contacto contigo pronto para coordinar tu pedido.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-4 px-6 py-2.5 text-xs uppercase tracking-wider border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                        >
                            Cerrar
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6 pb-4 border-b border-white/5">
                            <h3 className="text-white font-light text-lg mb-1">Hacer Pedido</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">
                                {product.name}{variant ? ` / ${variant}` : ''}{size ? ` / Talla ${size}` : ''} — ${product.price} MXN
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Nombre *</label>
                                <input
                                    required
                                    value={form.nombre}
                                    onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                                    className="w-full bg-white/3 border border-white/10 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Email *</label>
                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    className="w-full bg-white/3 border border-white/10 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Teléfono *</label>
                                <input
                                    required
                                    type="tel"
                                    value={form.telefono}
                                    onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                                    className="w-full bg-white/3 border border-white/10 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="10 dígitos"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Cantidad</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={form.cantidad}
                                    onChange={e => setForm(f => ({ ...f, cantidad: e.target.value }))}
                                    className="w-full bg-white/3 border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Notas adicionales</label>
                                <textarea
                                    value={form.notas}
                                    onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                                    rows={3}
                                    className="w-full bg-white/3 border border-white/10 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                                    placeholder="Instrucciones especiales, preguntas..."
                                />
                            </div>
                            {error && <p className="text-red-400 text-xs">{error}</p>}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 text-xs uppercase tracking-wider text-white bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Enviando...' : 'Confirmar Pedido →'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default function Merch() {
    const [orderTarget, setOrderTarget] = useState<{ product: Product; size: string; variant: ProductVariant['label'] | null } | null>(null);

    return (
        <section id="merch" className="relative w-full bg-black px-4 my-16">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200 mb-3">
                        Mercancía
                    </h2>
                    <div className="w-12 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onOrder={(p, s, v) => setOrderTarget({ product: p, size: s, variant: v })}
                        />
                    ))}
                </div>

                {/* Nota informativa */}
                <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-xs text-gray-400 uppercase tracking-widest hover:text-blue-100/90 hover:text-shadow-2xl hover:text-shadow-white transition-colors duration-700">Contacto vía redes sociales</p>
                </div>
            </div>

            {orderTarget && (
                <OrderModal
                    product={orderTarget.product}
                    size={orderTarget.size}
                    variant={orderTarget.variant}
                    onClose={() => setOrderTarget(null)}
                />
            )}
        </section>
    );
}
