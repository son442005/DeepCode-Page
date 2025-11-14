import { nav, site, contactItems } from '../constants'
import { useLang } from '../lang'

export const Footer = () => {
    const { lang } = useLang()
    const email = contactItems.find((i) => i.title === 'Liên Hệ')?.details.find((d) => d.startsWith('Email'))?.split(': ')[1] ?? 'hlgcongnghe.vn@gmail.com'
    const phone = contactItems.find((i) => i.title === 'Liên Hệ')?.details.find((d) => d.startsWith('Hotline'))?.split(': ')[1] ?? '+84 000 000 000'
    const addressVi = contactItems.find((i) => i.title === 'Trụ Sở Chính')?.details[0] ?? 'Hanoi, Vietnam'
    const address = lang === 'en'
        ? '208, Van Phuc, Ha Dong, Hanoi'
        : lang === 'vi'
            ? addressVi
            : '越南河内市河东区万福208号'

    const quickLinks = nav.filter((n) => ['#about', '#vision', '#features', '#showcase'].includes(n.href))

    return (
        <footer className="mt-16 bg-dark text-white relative w-full overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid gap-10 lg:grid-cols-3">
                    {/* Brand + description */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt={`${site.company} logo`} className="h-8 w-auto object-contain brightness-0 invert" />
                            <div className="text-xl font-semibold text-blue-400">{site.company}</div>
                        </div>
                        <p className="mt-4 text-sm text-white/70 max-w-md">
                            {lang === 'en' ? 'Leading provider of custom software solutions and digital transformation for businesses.' : lang === 'vi' ? 'Nhà cung cấp hàng đầu các giải pháp phần mềm theo yêu cầu và chuyển đổi số cho doanh nghiệp.' : '为企业提供定制软件解决方案和数字化转型的领先供应商。'}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            {/* Wechat Button */}
                            <a
                                href="https://u.wechat.com/kEat7lQcv3GbnPcme-I_Zq8"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Wechat"
                                className="w-12 h-12 bg-[#FFFFFF] text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}wechat-app-icon.png`}
                                    alt="Wechat"
                                    className="w-8 h-8 object-contain drop-shadow-sm"
                                />
                            </a>

                            {/* Telegram Button */}
                            <a
                                href="https://t.me/dingvandong1234"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                                className="w-12 h-12 bg-[#FFFFFF] text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-7 h-7 drop-shadow-sm"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.815c-.139.625-.518.775-1.048.481l-2.89-2.13-1.395 1.34c-.151.151-.282.282-.576.282l.206-2.92 5.342-4.826c.234-.207-.05-.323-.362-.116l-6.597 4.15-2.844-.894c-.618-.193-.635-.618.132-.928l11.132-4.287c.516-.193.966.119.797.904z" />
                                </svg>
                            </a>

                            {/* Zalo Button */}
                            <a
                                href="https://zalo.me/0929009999"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Zalo"
                                className="w-12 h-12 bg-[#FFFFFF] text-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}zalo-icon.svg`}
                                    alt="Zalo"
                                    className="w-8 h-8 object-contain drop-shadow-sm"
                                />
                            </a>

                            {/* Facebook Button */}
                            <a
                                href="https://www.facebook.com/tu.tuan.7921"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-12 h-12 bg-[#FFFFFF] text-slate-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}face-icon.png`}
                                    alt="Facebook"
                                    className="w-8 h-8 object-contain drop-shadow-sm"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{lang === 'en' ? 'Quick Links' : lang === 'vi' ? 'Liên kết nhanh' : '快速链接'}</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            {quickLinks.map((l) => (
                                <li key={l.href}><a href={l.href} className="hover:text-orange-300 transition">{lang === 'en' ? (
                                    l.href === '#about' ? 'About' :
                                        l.href === '#vision' ? 'Vision' :
                                            l.href === '#features' ? 'Services' :
                                                l.href === '#showcase' ? 'Projects' : l.label
                                ) : lang === 'vi' ? l.label : (
                                    l.href === '#about' ? '关于' :
                                        l.href === '#vision' ? '愿景' :
                                            l.href === '#features' ? '服务' :
                                                l.href === '#showcase' ? '项目' : l.label
                                )}</a></li>
                            ))}
                            <li><a href="#privacy" className="hover:text-orange-300 transition">{lang === 'en' ? 'Privacy Policy' : lang === 'vi' ? 'Chính sách bảo mật' : '隐私政策'}</a></li>
                            <li><a href="#terms" className="hover:text-orange-300 transition">{lang === 'en' ? 'Terms of Service' : lang === 'vi' ? 'Điều khoản dịch vụ' : '服务条款'}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className='flex flex-col gap-4'>
                        <h4 className="text-white font-semibold mb-4">{lang === 'en' ? 'Contact' : lang === 'vi' ? 'Liên hệ' : '联系'}</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><a className="hover:text-orange-300" href={`mailto:${email}`}>{email}</a></li>
                            <li><a className="hover:text-orange-300" href={`tel:${phone}`}>{phone}</a></li>
                            <li className="max-w-sm">{address}</li>
                        </ul>
                        <div className="relative shadow-3d-md hover:shadow-3d-lg transition-all duration-300 overflow-hidden rounded-2xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4650.443408254163!2d105.76932529472457!3d20.979395854141526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134532fda316fe5%3A0xc893c5dcdf369ce!2zMjA4IMSQxrDhu51uZyBW4bqhbiBQaMO6YywgVuG6oW4gUGjDumMsIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1762759878880!5m2!1svi!2s"
                                    width="50%"
                                    height="50%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title={lang === 'en' ? 'Our Location' : lang === 'vi' ? 'Vị trí của chúng tôi' : '我们的位置'}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
                    {lang === 'en' ? `© ${new Date().getFullYear()} ${site.company}. All rights reserved.` : lang === 'vi' ? `© ${new Date().getFullYear()} ${site.company}. Bảo lưu mọi quyền.` : `© ${new Date().getFullYear()} ${site.company}。保留所有权利。`}
                </div>
            </div>
        </footer>
    )
}


