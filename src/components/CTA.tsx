export const CTA = () => {
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
        <section id="contact" className="">
            <div className="">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-primary/20 via-secondary/10 to-white/5">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">Bắt đầu cùng chúng tôi</h3>
                            <p className="mt-3 text-slate-700">Hãy để lại thông tin, đội ngũ sẽ tư vấn giải pháp phù hợp.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <input name="name" required placeholder="Họ và tên" className="rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-primary" />
                            <input name="email" type="email" required placeholder="Email" className="rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-primary" />
                            <textarea name="message" rows={4} placeholder="Nhu cầu của bạn" className="rounded-lg bg-white/10 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-primary" />
                            <button type="submit" className="rounded-lg bg-primary px-5 py-3 font-medium hover:bg-blue-500 transition">Gửi yêu cầu</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


