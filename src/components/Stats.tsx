import { stats } from '../constants'
import { useLang } from '../lang'
import { FadeUp } from './Anim'

export const Stats = () => {
    const { lang } = useLang()
    return (
        <div className="w-full flex justify-center">
            <section id="stats" className="w-[80%] bg-white py-10">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <FadeUp className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {stats.map((s) => (
                            <div key={s.label} className="shadow-3d shadow-3d-hover rounded-xl bg-blue-500 px-6 py-6 sm:px-10 sm:py-8 text-center text-white transition-shadow">
                                <div className="font-bold text-3xl sm:text-4xl ">{s.value}</div>
                                <div className="mt-2 text-base sm:text-lg  ">{lang === 'en' ? (
                                    s.label === 'Dự án hoàn thành' ? 'Completed projects' :
                                        s.label === 'Khách hàng doanh nghiệp' ? 'Business clients' :
                                            s.label === 'Tỉ lệ hài lòng' ? 'Satisfaction rate' : s.label
                                ) : lang === 'vi' ? s.label : (
                                    s.label === 'Dự án hoàn thành' ? '已完成项目' :
                                        s.label === 'Khách hàng doanh nghiệp' ? '企业客户' :
                                            s.label === 'Tỉ lệ hài lòng' ? '满意度' : s.label
                                )}</div>
                            </div>
                        ))}
                    </FadeUp>
                </div>
            </section>
        </div>
    )
}


