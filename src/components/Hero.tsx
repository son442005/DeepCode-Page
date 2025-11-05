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
        <section className="relative pt-20" aria-label="Hero">
            <div className="top-0 absolute -z-10 bg-gradient-to-b from-black via-dark to-dark" />
            <div className=" ">
                <div className="grid gap-10 lg:grid-cols-2  ">
                    <div>
                        <span className="text-primary font-semibold">{site.tagline}</span>
                        <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
                            {site.hero.headline}
                        </h1>
                        <p className="mt-4 text-lg text-slate-700">
                            {site.hero.subheading}
                        </p>
                        <div className="mt-8 flex gap-3">
                            <button onClick={handlePrimaryClick} className="rounded-md bg-primary px-5 py-3 font-mediumtransition-transform duration-200 transform hover:scale-110">
                                {site.hero.primaryCta}
                            </button>
                            <button onClick={handleSecondaryClick} className="rounded-md border bg-[#777777] border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition">
                                {site.hero.secondaryCta}
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=" aspect-[16/10] w-full rounded-xl bg-gradient-to-tr from-primary/30 via-secondary/20 to-white/10 ring-1 ring-white/10 shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}


