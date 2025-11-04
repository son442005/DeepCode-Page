import { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '../constants'

export const Showcase = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(0)
    const gap = 16 // px (gap-4)
    const total = projects.length

    const getCardStride = () => {
        const el = containerRef.current
        if (!el) return 0
        const firstCard = el.querySelector('[data-card]') as HTMLElement | null
        if (!firstCard) return 0
        return firstCard.clientWidth + gap
    }

    const handlePrev = () => {
        if (!containerRef.current) return
        const el = containerRef.current
        const next = Math.max(0, active - 1)
        el.scrollTo({ left: next * getCardStride(), behavior: 'smooth' })
        setActive(next)
    }

    const handleNext = () => {
        if (!containerRef.current) return
        const el = containerRef.current
        const next = Math.min(total - 1, active + 1)
        el.scrollTo({ left: next * getCardStride(), behavior: 'smooth' })
        setActive(next)
    }

    const handleScroll = () => {
        if (!containerRef.current) return
        const el = containerRef.current
        const stride = getCardStride()
        const idx = stride ? Math.round(el.scrollLeft / stride) : 0
        setActive(Math.min(total - 1, Math.max(0, idx)))
    }

    useEffect(() => {
        const onResize = () => {
            // Snap to current index on resize to avoid misalignment
            if (!containerRef.current) return
            containerRef.current.scrollTo({ left: active * getCardStride() })
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [active])

    const dots = useMemo(() => Array.from({ length: total }), [total])

    return (
        <section id="showcase" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-slate-900">Dự án tiêu biểu</h2>
                </div>

                <div className="mt-8 relative">
                    {/* edge fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#CCFFFF] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#CCFFFF] to-transparent" />
                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-12 sm:px-16"
                    >
                        {projects.map((p, i) => (
                            <div key={p.title} className="snap-start shrink-0" data-card>
                                <div className="w-[88vw] sm:w-[460px] min-h-[420px] rounded-xl border border-slate-200 bg-white shadow flex flex-col">
                                    <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-slate-100">
                                        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex-1 p-4 flex flex-col">
                                        <div className="font-semibold text-slate-900 leading-snug">{p.title}</div>
                                        <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                                            {p.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls - placed within padded gutters so they don't cover content */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 ring-1 ring-slate-300 backdrop-blur px-3 py-2 text-slate-800 shadow hover:bg-white"
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 ring-1 ring-slate-300 backdrop-blur px-3 py-2 text-slate-800 shadow hover:bg-white"
                        aria-label="Next"
                    >
                        ›
                    </button>

                    <div className="mt-6 flex items-center justify-between px-2">
                        <div className="flex items-center gap-2">
                            {dots.map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`slide ${i + 1}`}
                                    onClick={() => {
                                        if (!containerRef.current) return
                                        containerRef.current.scrollTo({ left: i * getCardStride(), behavior: 'smooth' })
                                        setActive(i)
                                    }}
                                    className={`h-2.5 w-2.5 rounded-full ${i === active ? 'bg-primary' : 'bg-slate-300'}`}
                                />
                            ))}
                        </div>
                        <div className="hidden sm:flex gap-2 text-sm text-slate-600">{active + 1} / {total}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}


