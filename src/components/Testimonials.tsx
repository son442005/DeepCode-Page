import { testimonials } from '../constants'
import { useLang } from '../lang'

export const Testimonials = () => {
    const { lang } = useLang()
    return (
        <section id="testimonials" className="">
            <div className="">
                <div className="">
                    <h2 className="text-3xl font-bold text-slate-900">{lang === 'en' ? 'What our clients say' : lang === 'vi' ? 'Khách hàng nói gì' : '客户评价'}</h2>
                    <p className="mt-3 text-slate-700">{lang === 'en' ? 'Customer trust is our motivation to grow.' : lang === 'vi' ? 'Niềm tin của khách hàng là động lực để chúng tôi phát triển.' : '客户的信任是我们发展的动力。'}</p>
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


