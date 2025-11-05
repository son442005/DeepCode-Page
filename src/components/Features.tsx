import { features } from '../constants'

const Icon = ({ name }: { name: string }) => {
    if (name === 'strategy') return <div className="h-6 w-6 rounded bg-secondary" />
    if (name === 'dev') return <div className="h-6 w-6 rounded bg-primary" />
    if (name === 'deploy') return <div className="h-6 w-6 rounded bg-white/60" />
    return <div className="h-6 w-6 rounded bg-white/40" />
}

export const Features = () => {
    return (
        <section id="features" className="p-20 bg-stone-50 from-[#F8F4EB] to-[#F4EFE4] rounded-3xl">
            <div className="flex flex-col gap-10">
                <div className="">
                    <h2 className="text-2xl font-bold">Dịch vụ & Thế mạnh</h2>
                    <p className="">Những gì chúng tôi làm tốt nhất để giúp doanh nghiệp tăng trưởng.</p>
                </div>
                <div className="flex gap-7  ">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white gap-1 flex flex-col p-6 rounded-lg ">
                            <Icon name={f.icon} />
                            <h3 className="">{f.title}</h3>
                            <p className="">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


