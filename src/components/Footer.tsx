import { nav, site, contactItems } from '../constants'
import { useLang } from '../lang'

export const Footer = () => {
    const { lang } = useLang()
    const email = contactItems.find((i) => i.title === 'Liên Hệ')?.details.find((d) => d.startsWith('Email'))?.split(': ')[1] ?? 'info@example.com'
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
                            <div className="text-xl font-semibold">{site.company}</div>
                        </div>
                        <p className="mt-4 text-sm text-white/70 max-w-md">
                            {lang === 'en' ? 'Leading provider of custom software solutions and digital transformation for businesses.' : lang === 'vi' ? 'Nhà cung cấp hàng đầu các giải pháp phần mềm theo yêu cầu và chuyển đổi số cho doanh nghiệp.' : '为企业提供定制软件解决方案和数字化转型的领先供应商。'}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.77 8.44-4.93 8.44-9.94Z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80"><path d="M18.244 2H21.5l-7.4 8.46L23 22h-6.16l-4.81-6.27L6.5 22H3.243l7.92-9.05L1 2h6.34l4.38 5.74L18.243 2Zm-1.08 18.4h1.7L7.01 3.5H5.2l11.964 16.9Z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.98h.06c.53-1 .18-2.18 2.72-2.18 2.9 0 3.42 1.9 3.42 4.36V23h-4v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V23h-4V8.5h3.17z" /></svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{lang === 'en' ? 'Quick Links' : lang === 'vi' ? 'Liên kết nhanh' : '快速链接'}</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            {quickLinks.map((l) => (
                                <li key={l.href}><a href={l.href} className="hover:text-white transition">{lang === 'en' ? (
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
                            <li><a href="#privacy" className="hover:text-white transition">{lang === 'en' ? 'Privacy Policy' : lang === 'vi' ? 'Chính sách bảo mật' : '隐私政策'}</a></li>
                            <li><a href="#terms" className="hover:text-white transition">{lang === 'en' ? 'Terms of Service' : lang === 'vi' ? 'Điều khoản dịch vụ' : '服务条款'}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className='flex flex-col gap-4'>
                        <h4 className="text-white font-semibold mb-4">{lang === 'en' ? 'Contact' : lang === 'vi' ? 'Liên hệ' : '联系'}</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><a className="hover:text-white" href={`mailto:${email}`}>{email}</a></li>
                            <li><a className="hover:text-white" href={`tel:${phone}`}>{phone}</a></li>
                            <li className="max-w-sm">{address}</li>
                        </ul>
                        <div className="relative shadow-3d-md hover:shadow-3d-lg transition-all duration-300 overflow-hidden rounded-2xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14901.233202635633!2d105.77032909999998!3d20.9802753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453011825b86f%3A0x559206e57bb9e397!2zQ8O0bmcgVHkgQ1AgQ8O0bmcgTmdo4buHIEhMRyBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1762759119262!5m2!1svi!2s"
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


