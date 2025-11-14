import { site } from '../constants'
import { useLang } from '../lang'
import { FadeUp } from './Anim'

export const About = () => {
    const { lang } = useLang()
    return (
        <section id="about" className="w-[80%]" aria-label="About Us ">
            <div className="p-10 bg-white">
                <FadeUp className="grid lg:grid-cols-2 items-center bg-white p-3 rounded-xl px-10 border-2 border-indigo-600">
                    <div>
                        <h2 className="text-3xl font-bold text-gradient-brand text-black items-center border-b-2 pb-4">{lang === 'en' ? `About ${site.company}` : lang === 'vi' ? `Về ${site.company}` : `关于${site.company}`}</h2>
                        <p className="mt-3 text-black">
                            {lang === 'en'
                                ? 'We are a team of software engineers focusing on quality, user experience, and efficiency. From strategy consulting to implementation and operations, we accompany businesses throughout the product lifecycle.'
                                : lang === 'vi'
                                ? 'Chúng tôi là đội ngũ kỹ sư phần mềm tập trung vào chất lượng, trải nghiệm và hiệu quả. Từ tư vấn chiến lược đến triển khai và vận hành, ' + site.company + ' cam kết đồng hành cùng doanh nghiệp trong suốt vòng đời sản phẩm.'
                                : '我们是一支专注于质量、用户体验和效率的软件工程师团队。从战略咨询到实施和运营，我们陪伴企业在整个产品生命周期中成长。'}
                        </p>
                    </div>
                    <div className="flex items-center justify-end mt-8 lg:mt-0">
                        <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt={`${site.company} logo`} className="h-24 sm:h-28 md:h-36 lg:h-44 xl:h-48 w-auto object-contain" />
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}


