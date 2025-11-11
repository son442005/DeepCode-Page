import { features } from '../constants'
import { useLang } from '../lang'
import { FadeUp, SlideIn } from './Anim'

const Icon = ({ name }: { name: string }) => {
    if (name === 'ai') {
        return (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M8 16V8h2.5a2.5 2.5 0 1 1 0 5H8" />
                <path d="M14 16V8h2" />
            </svg>
        )
    }
    if (name === 'web') {
        return (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
        )
    }
    if (name === 'mobile') {
        return (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M11 18h2" />
            </svg>
        )
    }
    if (name === 'cloud') {
        return (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 17.5A4.5 4.5 0 0 0 17 9a6 6 0 0 0-11 2.4A4 4 0 0 0 6 19h12" />
            </svg>
        )
    }
    if (name === 'blockchain') {
        return (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <path d="M10 6.5h4M6.5 10v4M14 10v4M10 17.5h4" />
            </svg>
        )
    }
    return <div className="h-6 w-6 rounded bg-slate-700" />
}

export const Features = () => {
    const { lang } = useLang()
    return (
        <section id="features" className="pt-8 sm:pt-10 pb-14 sm:pb-20 bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeUp className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-serif text-blue-900">{lang === 'en' ? 'Services' : lang === 'vi' ? 'Dịch vụ' : '服务'}</h2>
                    <p className="mt-2 sm:mt-3 text-blue-700 text-sm sm:text-base items-center border-b-2 border-orange-300 pb-4">{lang === 'en' ? 'Comprehensive technology solutions for businesses.' : lang === 'vi' ? 'Giải pháp công nghệ toàn diện cho doanh nghiệp.' : '为企业提供全面的技术解决方案。'}</p>
                </FadeUp>
                <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
                    {features.map((f, index) => (
                        <SlideIn key={f.title} direction={index % 2 === 0 ? 'left' : 'right'} className="feature-block rounded-2xl p-4 sm:p-6 shadow-lg ring-1 ring-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: f.color }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/80 ring-1 ring-slate-200/50 shadow-sm">
                                    <Icon name={f.icon} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{lang === 'en' ? (
                                    f.icon === 'web' ? 'Website Development' :
                                        f.icon === 'mobile' ? 'Mobile Apps' :
                                            f.icon === 'ai' ? 'Artificial Intelligence (AI)' :
                                                f.icon === 'blockchain' ? 'Blockchain' : f.title
                                ) : lang === 'vi' ? f.title : (
                                    f.icon === 'web' ? '网站开发' :
                                        f.icon === 'mobile' ? '移动应用' :
                                            f.icon === 'ai' ? '人工智能 (AI)' :
                                                f.icon === 'blockchain' ? '区块链' : f.title
                                )}</h3>
                            </div>
                            <p className="mt-2 sm:mt-3 text-slate-800 text-sm sm:text-base">{lang === 'en' ? (
                                f.icon === 'web' ? 'Designing and building modern websites with optimized UX, SEO and performance.' :
                                    f.icon === 'mobile' ? 'Developing cross-platform iOS/Android apps with intuitive UI/UX.' :
                                        f.icon === 'ai' ? 'Consulting and implementing AI/ML, chatbots, OCR and data mining.' :
                                            f.icon === 'blockchain' ? 'Building smart contracts, wallets, DApps and blockchain integrations.' : f.description
                            ) : lang === 'vi' ? f.description : (
                                f.icon === 'web' ? '设计和构建具有优化用户体验、SEO和性能的现代网站。' :
                                    f.icon === 'mobile' ? '开发具有直观UI/UX的跨平台iOS/Android应用。' :
                                        f.icon === 'ai' ? '咨询和实施AI/ML、聊天机器人、OCR和数据挖掘。' :
                                            f.icon === 'blockchain' ? '构建智能合约、钱包、DApp和区块链集成。' : f.description
                            )}</p>
                        </SlideIn>
                    ))}
                </div>
            </div>
        </section>
    )
}




