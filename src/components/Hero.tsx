import { site } from '../constants'
import { useLang } from '../lang'
import { useInView } from '../hooks/useInView'
import { useState, useEffect } from 'react'

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const baseSlides = [
        `${import.meta.env.BASE_URL}Slideshow-1.jpg`,
        `${import.meta.env.BASE_URL}Slideshow-2.jpg`,
        `${import.meta.env.BASE_URL}Slideshow-3.jpg`
    ]
    // Duplicate first slide at the end for seamless loop
    const slides = [...baseSlides, baseSlides[0]]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const next = prev + 1
                if (next > baseSlides.length) {
                    // After showing duplicate slide, reset to 0
                    return 0
                }
                return next
            })
        }, 3000) // Change slide every 3 seconds

        return () => clearInterval(interval)
    }, [baseSlides.length])

    // Handle seamless loop: when showing duplicate slide, reset to 0 without transition
    useEffect(() => {
        if (currentSlide === baseSlides.length) {
            // Reset to 0 right after transition completes (1500ms)
            const timer = setTimeout(() => {
                setIsTransitioning(false)
                setCurrentSlide(0)
                // Use requestAnimationFrame for smoother reset
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        setIsTransitioning(true)
                    }, 16) // Next frame
                })
            }, 1500) // Wait for transition to complete
            return () => clearTimeout(timer)
        }
    }, [currentSlide, baseSlides.length])

    const handlePrimaryClick = () => {
        const el = document.querySelector('#contact')
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handleSecondaryClick = () => {
        const el = document.querySelector('#about')
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const { lang } = useLang()
    return (
        <section className="relative pt-20 h-screen overflow-x-hidden w-full" aria-label="Hero">
            {/* Slideshow Background */}
            <div className="absolute top-0 left-0 right-0 z-0 h-full w-full overflow-hidden" style={{ minWidth: '100vw' }}>
                <div 
                    className={`h-full ${isTransitioning ? 'transition-transform duration-[1500ms] ease' : ''}`}
                    style={{
                        width: `${slides.length * 100}vw`,
                        transform: `translateX(-${currentSlide * 100}vw)`,
                        display: 'flex',
                        willChange: 'transform'
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 h-full"
                            style={{
                                backgroundImage: `url(${slide})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100vw'
                            }}
                        />
                    ))}
                </div>
            </div>
            {/* Left dark overlay to highlight text */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0)_72%)]" style={{ minWidth: '100vw' }} />
            {/* Right soft light overlay */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-full w-full bg-[linear-gradient(to_left,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.06)_45%,rgba(255,255,255,0)_70%)]" style={{ minWidth: '100vw' }} />
            {/* Global dim to darken background overall */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-full w-full bg-black/20" style={{ minWidth: '100vw' }} />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2 items-center h-full">
                    <HeroText />
                </div>
            </div>
        </section>
    )
}

const HeroText = () => {
    const ref = useInView<HTMLDivElement>()
    const { lang } = useLang()
    return (
        <div ref={ref} className="flex flex-col justify-start h-full pt-16 md:pt-24 px-0 sm:px-0 animate-fade-up">
            <span className="text-orange-400 font-semibold">{lang === 'en' ? 'Software technology for business' : lang === 'vi' ? site.tagline : '企业软件技术'}</span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {lang === 'en' ? 'Grow faster with modern software solutions' : lang === 'vi' ? site.hero.headline : '通过现代软件解决方案更快发展'}
            </h1>
            <p className="mt-4 text-lg text-white/80">
                {lang === 'en' ? 'Consulting, designing and developing software tailored for your business.' : lang === 'vi' ? site.hero.subheading : '咨询、设计和开发适合您业务的软件。'}
            </p>
            <div className="mt-8 flex gap-3">
                <button onClick={() => {
                    const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }} className="shadow-3d-primary shadow-3d-hover rounded-md bg-primary px-5 py-3 font-medium text-white hover:brightness-110 transition">
                    {lang === 'en' ? 'Contact us' : lang === 'vi' ? site.hero.primaryCta : '联系我们'}
                </button>
                <button onClick={() => {
                    const el = document.querySelector('#about'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }} className="shadow-3d shadow-3d-hover rounded-md border border-white/60 bg-white/10 backdrop-blur-sm px-5 py-3 font-medium text-white hover:bg-white/20 transition">
                    {lang === 'en' ? 'Learn more' : lang === 'vi' ? site.hero.secondaryCta : '了解更多'}
                </button>
            </div>
        </div>
    )
}


