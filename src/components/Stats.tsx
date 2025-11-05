import { stats } from '../constants'
import { useLang } from '../lang'
import { FadeUp } from './Anim'

export const Stats = () => {
    const { lang } = useLang()
    return (
        <section className="">
            <div className=" ">
                <FadeUp className="flex gap-10 ">
                    {stats.map((s) => (
                        <div key={s.label} className="rounded-xl bg-white px-20 py-8 flex-1 text-center">
                            <div className="font-bold  text-3xl">{s.value}</div>
                            <div className="">{lang === 'en' ? (
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


