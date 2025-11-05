import { stats } from '../constants'

export const Stats = () => {
    return (
        <section className="">
            <div className=" ">
                <div className="flex gap-10 ">
                    {stats.map((s) => (
                        <div key={s.label} className="rounded-xl bg-white px-20 py-8 flex-1 text-center">
                            <div className="font-bold  text-3xl">{s.value}</div>
                            <div className="">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


