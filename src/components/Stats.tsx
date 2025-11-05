import { stats } from '../constants'
import { useLang } from '../lang'
import { FadeUp } from './Anim'

export const Stats = () => {
    const { lang } = useLang()
    return (
        <section className="">
            <div className="px-4 sm:px-6 lg:px-8">
                <FadeUp className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {stats.map((s) => (
                        <div key={s.label} className="rounded-xl bg-white px-6 py-6 sm:px-10 sm:py-8 text-center">
                            <div className="font-bold text-3xl sm:text-4xl">{s.value}</div>
                            <div className="mt-2 text-base sm:text-lg">{lang === 'en' ? (
                                s.label === 'Dự án hoàn thành' ? 'Completed projects' :
                                    s.label === 'Khách hàng doanh nghiệp' ? 'Business clients' :
                                        s.label === 'Tỉ lệ hài lòng' ? 'Satisfaction rate' : s.label
                            ) : s.label}</div>
                        </div>
                    ))}
                </FadeUp>
            </div>
        </section>
    )
}


