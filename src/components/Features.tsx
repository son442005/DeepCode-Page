import { features } from '../constants'

const Icon = ({ name }: { name: string }) => {
    if (name === 'strategy') return <div className="h-6 w-6 rounded bg-secondary" />
    if (name === 'dev') return <div className="h-6 w-6 rounded bg-primary" />
    if (name === 'deploy') return <div className="h-6 w-6 rounded bg-white/60" />
    return <div className="h-6 w-6 rounded bg-white/40" />
}

export const Features = () => {
    return (
        <section id="features" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold">Dịch vụ & Thế mạnh</h2>
                    <p className="mt-3 text-slate-700">Những gì chúng tôi làm tốt nhất để giúp doanh nghiệp tăng trưởng.</p>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow">
                            <Icon name={f.icon} />
                            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                            <p className="mt-2 text-slate-700">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


