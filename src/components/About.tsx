import { site } from '../constants'

export const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2 items-start">
                    <div>
                        <h2 className="text-3xl font-bold">Về {site.company}</h2>
                        <p className="mt-3 text-slate-700">
                            Chúng tôi là đội ngũ kỹ sư phần mềm tập trung vào chất lượng, trải nghiệm và hiệu quả.
                            Từ tư vấn chiến lược đến triển khai và vận hành, {site.company} cam kết đồng hành cùng doanh nghiệp trong suốt vòng đời sản phẩm.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-[4/3] rounded-lg bg-white/10" />
                        <div className="aspect-[4/3] rounded-lg bg-white/10" />
                        <div className="aspect-[4/3] rounded-lg bg-white/10" />
                    </div>
                </div>
            </div>
        </section>
    )
}


