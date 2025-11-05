import { nav, site } from '../constants'
import { useEffect, useState } from 'react'
import { useLang } from '../lang'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { lang, setLang } = useLang()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // lang persistence handled by provider
    const handleToggle = () => setIsOpen((v) => !v)

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
    }
    return (
        <header className={`fixed top-0 z-50 left-0 right-0 bg-white `}>
            <div className=" mx-20 ">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-white ring-1 ring-slate-300 shadow-sm flex items-center justify-center overflow-hidden">
                            <img src="/logo.svg" alt={`${site.company} logo`} className="max-h-8 max-w-8 object-contain" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{site.company}</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {/* primary links */}
                        <button onClick={() => handleNavClick('#about')} className="text-base text-slate-700 hover:text-slate-900 transition">{lang === 'en' ? 'About' : 'Giới thiệu'}</button>
                        <button onClick={() => handleNavClick('#features')} className="text-base text-slate-700 hover:text-slate-900 transition">{lang === 'en' ? 'Services' : 'Dịch vụ'}</button>
                        <button onClick={() => handleNavClick('#contact')} className="text-base text-slate-700 hover:text-slate-900 transition">{lang === 'en' ? 'Contact' : 'Liên hệ'}</button>

                        {/* language area */}
                        {/* segmented language toggle */}
                        <div className="relative h-8 w-24 rounded-lg ring-1 ring-slate-300 bg-white flex items-center p-0.5">
                            <div className={`absolute top-0.5 bottom-0.5 w-[calc(50%-4px)] rounded-md bg-primary transition-transform ${lang === 'en' ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'}`} />
                            <button onClick={() => setLang('en')} className={`relative z-10 flex-1 text-sm font-semibold ${lang === 'en' ? 'text-white' : 'text-slate-700'}`}>EN</button>
                            <button onClick={() => setLang('vi')} className={`relative z-10 flex-1 text-sm font-semibold ${lang === 'vi' ? 'text-white' : 'text-slate-700'}`}>VI</button>
                        </div>
                    </nav>
                    <button onClick={handleToggle} className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-black/10">
                        <span className="sr-only">Menu</span>
                        <div className="h-0.5 w-6 bg-slate-800 mb-1" />
                        <div className="h-0.5 w-6 bg-slate-800 mb-1" />
                        <div className="h-0.5 w-6 bg-slate-800" />
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col gap-2">
                            <button onClick={() => handleNavClick('#about')} className="rounded px-3 py-2 text-left hover:bg-black/10 text-slate-800">{lang === 'en' ? 'About' : 'Giới thiệu'}</button>
                            <button onClick={() => handleNavClick('#features')} className="rounded px-3 py-2 text-left hover:bg-black/10 text-slate-800">{lang === 'en' ? 'Services' : 'Dịch vụ'}</button>
                            <button onClick={() => handleNavClick('#contact')} className="rounded px-3 py-2 text-left hover:bg-black/10 text-slate-800">{lang === 'en' ? 'Contact' : 'Liên hệ'}</button>
                            <div className="px-3 pt-2">
                                <div className="relative h-8 w-24 rounded-lg ring-1 ring-slate-300 bg-white flex items-center p-0.5">
                                    <div className={`absolute top-0.5 bottom-0.5 w-[calc(50%-4px)] rounded-md bg-primary transition-transform ${lang === 'en' ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'}`} />
                                    <button onClick={() => setLang('en')} className={`relative z-10 flex-1 text-sm font-semibold ${lang === 'en' ? 'text-white' : 'text-slate-700'}`}>EN</button>
                                    <button onClick={() => setLang('vi')} className={`relative z-10 flex-1 text-sm font-semibold ${lang === 'vi' ? 'text-white' : 'text-slate-700'}`}>VI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}


