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
        alert(lang === 'en' ? 'Thank you! We will contact you soon.' : lang === 'vi' ? 'Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.' : '谢谢！我们会尽快与您联系。')
        e.currentTarget.reset()
    }

    return (
        <section id="contact" className="bg-white rounded-none sm:rounded-3xl -mx-4 sm:-mx-6 md:mx-0">
            <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
                <div className=" rounded-none sm:rounded-2xl bg-gradient-to-r from-[#FFFFFF] to-[#E9ECEF] p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-2 items-start">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{lang === 'en' ? 'Ready to get started?' : lang === 'vi' ? 'Sẵn sàng bắt đầu?' : '准备开始了吗？'}</h3>
                            <p className="mt-4 text-slate-700 text-base sm:text-lg">{lang === 'en' ? 'Contact us to discuss the right software solution for your business.' : lang === 'vi' ? 'Liên hệ với chúng tôi để thảo luận giải pháp phần mềm phù hợp cho doanh nghiệp của bạn.' : '联系我们，讨论适合您业务的软件解决方案。'}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="shadow-3d grid gap-5 bg-white rounded-2xl p-6 ring-1 ring-slate-200">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-sm text-slate-700">{lang === 'en' ? 'Full name' : lang === 'vi' ? 'Họ và tên' : '姓名'}</label>
                                <input id="name" name="name" required placeholder={lang === 'en' ? 'e.g., John Doe' : lang === 'vi' ? 'VD: Nguyễn Văn A' : '例如：张三'} className="rounded-lg px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-primary bg-white text-slate-900" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-sm text-slate-700">Email</label>
                                <input id="email" name="email" type="email" required placeholder={lang === 'en' ? 'you@example.com' : lang === 'vi' ? 'you@example.com' : 'you@example.com'} className="rounded-lg px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-primary bg-white text-slate-900" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="message" className="text-sm text-slate-700">{lang === 'en' ? 'Your needs' : lang === 'vi' ? 'Nhu cầu của bạn' : '您的需求'}</label>
                                <textarea id="message" name="message" rows={4} placeholder={lang === 'en' ? 'Briefly describe your problem, scope, timeline...' : lang === 'vi' ? 'Mô tả ngắn bài toán, phạm vi, thời gian...' : '简要描述您的问题、范围、时间线...'} className="rounded-lg px-4 py-3 outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-primary bg-white text-slate-900" />
                            </div>
                            <button type="submit" className="shadow-3d-primary shadow-3d-hover rounded-lg bg-primary px-5 py-3 font-medium text-white hover:brightness-110 transition">{lang === 'en' ? 'Send request' : lang === 'vi' ? 'Gửi yêu cầu' : '发送请求'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


