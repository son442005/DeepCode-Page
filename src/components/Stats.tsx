import { stats } from '../constants'

export const Stats = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {stats.map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                            <div className="text-4xl font-bold text-slate-900">{s.value}</div>
                            <div className="mt-2 text-slate-700">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


