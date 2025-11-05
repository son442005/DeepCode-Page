import { site } from '../constants'
import { useLang } from '../lang'
import { FadeUp } from './Anim'

export const About = () => {
    const { lang } = useLang()
    return (
        <section id="about" className="p-20 bg-white rounded-3xl" aria-label="About Us ">
            <div className="">
                <FadeUp className="grid lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">{lang === 'en' ? `About ${site.company}` : `Về ${site.company}`}</h2>
                        <p className="mt-3 text-slate-700">
                            {lang === 'en'
                                ? 'We are a team of software engineers focusing on quality, user experience, and efficiency. From strategy consulting to implementation and operations, we accompany businesses throughout the product lifecycle.'
                                : 'Chúng tôi là đội ngũ kỹ sư phần mềm tập trung vào chất lượng, trải nghiệm và hiệu quả. Từ tư vấn chiến lược đến triển khai và vận hành, ' + site.company + ' cam kết đồng hành cùng doanh nghiệp trong suốt vòng đời sản phẩm.'}
                        </p>
                    </div>
                    <div className="flex items-center justify-end mt-8 lg:mt-0">
                        <img src="/logo.svg" alt={`${site.company} logo`} className="h-24 sm:h-28 md:h-36 lg:h-44 xl:h-48 w-auto object-contain" />
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}


