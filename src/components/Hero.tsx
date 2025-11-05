import { site } from '../constants'

export const Hero = () => {
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

    return (
        <section className="relative pt-20 h-screen" aria-label="Hero">
            <div className="absolute top-0 left-1/2 z-0 h-full w-screen -translate-x-1/2 bg-[url('/hero-background.png')] bg-cover bg-center" />
            {/* Left dark overlay to highlight text */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-screen -translate-x-1/2 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0)_72%)]" />
            {/* Right soft light overlay */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-screen -translate-x-1/2 bg-[linear-gradient(to_left,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.06)_45%,rgba(255,255,255,0)_70%)]" />
            {/* Global dim to darken background overall */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-screen -translate-x-1/2 bg-black/20" />
            <div className="relative z-10 ">
                <div className="grid gap-10 lg:grid-cols-2 items-center h-full ">
                    <div className="flex flex-col justify-start h-full pt-16 md:pt-24">
                        <span className="text-sky-300 font-semibold">{site.tagline}</span>
                        <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                            {site.hero.headline}
                        </h1>
                        <p className="mt-4 text-lg text-white/80">
                            {site.hero.subheading}
                        </p>
                        <div className="mt-8 flex gap-3">
                            <button onClick={handlePrimaryClick} className="rounded-md bg-primary px-5 py-3 font-medium text-white shadow hover:brightness-110 transition">
                                {site.hero.primaryCta}
                            </button>
                            <button onClick={handleSecondaryClick} className="rounded-md border border-white/60 bg-transparent px-5 py-3 font-medium text-white hover:bg-white/10 transition">
                                {site.hero.secondaryCta}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


