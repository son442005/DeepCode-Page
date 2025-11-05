import { testimonials } from '../constants'

export const Testimonials = () => {
    return (
        <section id="testimonials" className="">
            <div className="">
                <div className="">
                    <h2 className="text-3xl font-bold text-slate-900">Khách hàng nói gì</h2>
                    <p className="mt-3 text-slate-700">Niềm tin của khách hàng là động lực để chúng tôi phát triển.</p>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {testimonials.map((t, idx) => (
                        <figure key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <blockquote className="text-slate-900">“{t.quote}”</blockquote>
                            <figcaption className="mt-4 text-sm text-slate-600">
                                {t.author} — {t.role}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}


