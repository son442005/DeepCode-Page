import { site } from '../constants'

export const About = () => {
    return (
        <section id="about" className="p-20 bg-white rounded-3xl" aria-label="About Us ">
            <div className="">
                <div className="grid lg:grid-cols-2 items-start">
                    <div>
                        <h2 className="text-3xl font-bold">Về {site.company}</h2>
                        <p className="mt-3 text-slate-700">
                            Chúng tôi là đội ngũ kỹ sư phần mềm tập trung vào chất lượng, trải nghiệm và hiệu quả.
                            Từ tư vấn chiến lược đến triển khai và vận hành, {site.company} cam kết đồng hành cùng doanh nghiệp trong suốt vòng đời sản phẩm.
                        </p>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}


