import { FadeUp } from './Anim'
import { useLang } from '../lang'

export const CTA = () => {
    const { lang } = useLang()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name') as string
        const email = form.get('email') as string
        const message = form.get('message') as string
        console.log({ name, email, message })
        alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.')
        e.currentTarget.reset()
    }

    return (
        <section id="contact" className="bg-white">
            <div className="p-20">
                <div className="rounded-2xl bg-gradient-to-r from-[#FFFFFF] to-[#E9ECEF] p-8 sm:p-12 shadow">
                    <div className="grid gap-10 lg:grid-cols-2 items-start">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{lang === 'en' ? 'Ready to get started?' : 'Sẵn sàng bắt đầu?'}</h3>
                            <p className="mt-4 text-slate-700 text-base sm:text-lg">{lang === 'en' ? 'Contact us to discuss the right software solution for your business.' : 'Liên hệ với chúng tôi để thảo luận giải pháp phần mềm phù hợp cho doanh nghiệp của bạn.'}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="grid gap-5 bg-white rounded-xl p-6 ring-1 ring-slate-200">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-sm text-slate-700">{lang === 'en' ? 'Full name' : 'Họ và tên'}</label>
                                <input id="name" name="name" required placeholder={lang === 'en' ? 'e.g., John Doe' : 'VD: Nguyễn Văn A'} className="rounded-lg px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-primary bg-white text-slate-900" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-sm text-slate-700">Email</label>
                                <input id="email" name="email" type="email" required placeholder={lang === 'en' ? 'you@example.com' : 'you@example.com'} className="rounded-lg px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-primary bg-white text-slate-900" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="message" className="text-sm text-slate-700">{lang === 'en' ? 'Your needs' : 'Nhu cầu của bạn'}</label>
                                <textarea id="message" name="message" rows={4} placeholder={lang === 'en' ? 'Briefly describe your problem, scope, timeline...' : 'Mô tả ngắn bài toán, phạm vi, thời gian...'} className="rounded-lg px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-primary bg-white text-slate-900" />
                            </div>
                            <button type="submit" className="rounded-lg bg-primary px-5 py-3 font-medium text-white shadow hover:brightness-110 transition">{lang === 'en' ? 'Send request' : 'Gửi yêu cầu'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


