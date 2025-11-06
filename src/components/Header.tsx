import { nav, site } from '../constants'
import { useEffect, useState } from 'react'
import { useLang } from '../lang'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { lang, setLang } = useLang()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isLangDropdownOpen && !(e.target as Element).closest('.lang-dropdown')) {
                setIsLangDropdownOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isLangDropdownOpen])

    // lang persistence handled by provider
    const handleToggle = () => setIsOpen((v) => !v)

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
    }

    const languages = [
        { code: 'vi' as const, name: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'en' as const, name: 'English', flag: '🇺🇸' },
        { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
    ]

    const currentLang = languages.find(l => l.code === lang) || languages[0]
    return (
        <header className={`fixed top-0 z-50 left-0 right-0 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex h-12 sm:h-14 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white ring-1 ring-slate-300 shadow-sm flex items-center justify-center overflow-hidden">
                            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt={`${site.company} logo`} className="max-h-7 sm:max-h-8 max-w-8 object-contain" />
                        </div>
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight">{site.company}</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                        {/* primary links */} 
                        <button onClick={() => handleNavClick('#about')} className="text-base text-slate-700 hover:text-slate-900 transition">{lang === 'en' ? 'About' : lang === 'vi' ? 'Giới thiệu' : '关于'}</button>
                        <button onClick={() => handleNavClick('#features')} className="text-base text-slate-700 hover:text-slate-900 transition">{lang === 'en' ? 'Services' : lang === 'vi' ? 'Dịch vụ' : '服务'}</button>
                        <button onClick={() => handleNavClick('#contact')} className="text-base text-slate-700 hover:text-slate-900 transition">{lang === 'en' ? 'Contact' : lang === 'vi' ? 'Liên hệ' : '联系'}</button>

                        {/* language dropdown */}
                        <div className="relative lang-dropdown">
                            <button
                                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-slate-300 bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
                            >
                                <span className="text-lg">{currentLang.flag}</span>
                                <span>{currentLang.name}</span>
                                <svg 
                                    className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isLangDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-slate-200 py-1 z-50">
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setLang(l.code)
                                                setIsLangDropdownOpen(false)
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-slate-50 transition-colors ${
                                                lang === l.code ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700'
                                            }`}
                                        >
                                            <span className="text-lg">{l.flag}</span>
                                            <span>{l.name}</span>
                                            {lang === l.code && (
                                                <svg className="w-4 h-4 ml-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                    <button
                        onClick={handleToggle}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        className="md:hidden relative z-50 inline-flex items-center justify-center rounded-lg p-3 min-w-[44px] min-h-[44px] hover:bg-black/10 active:bg-black/20 touch-manipulation -mr-2"
                        type="button"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                        <span className="sr-only">Menu</span>
                        <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800 pointer-events-none" fill="none" stroke="currentColor">
                            <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-lg z-[60]">
                        <div className="flex flex-col gap-1 py-2">
                            <button
                                onClick={() => handleNavClick('#about')}
                                type="button"
                                className="px-4 py-3 text-left hover:bg-black/5 active:bg-black/10 text-slate-800 touch-manipulation"
                            >
                                {lang === 'en' ? 'About' : lang === 'vi' ? 'Giới thiệu' : '关于'}
                            </button>
                            <button
                                onClick={() => handleNavClick('#features')}
                                type="button"
                                className="px-4 py-3 text-left hover:bg-black/5 active:bg-black/10 text-slate-800 touch-manipulation"
                            >
                                {lang === 'en' ? 'Services' : lang === 'vi' ? 'Dịch vụ' : '服务'}
                            </button>
                            <button
                                onClick={() => handleNavClick('#contact')}
                                type="button"
                                className="px-4 py-3 text-left hover:bg-black/5 active:bg-black/10 text-slate-800 touch-manipulation"
                            >
                                {lang === 'en' ? 'Contact' : lang === 'vi' ? 'Liên hệ' : '联系'}
                            </button>
                            <div className="px-4 py-3">
                                <div className="relative lang-dropdown">
                                    <button
                                        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                        className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg ring-1 ring-slate-300 bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 touch-manipulation"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{currentLang.flag}</span>
                                            <span>{currentLang.name}</span>
                                        </div>
                                        <svg 
                                            className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isLangDropdownOpen && (
                                        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg ring-1 ring-slate-200 py-1 z-50">
                                            {languages.map((l) => (
                                                <button
                                                    key={l.code}
                                                    onClick={() => {
                                                        setLang(l.code)
                                                        setIsLangDropdownOpen(false)
                                                    }}
                                                    type="button"
                                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-slate-50 transition-colors touch-manipulation ${
                                                        lang === l.code ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700'
                                                    }`}
                                                >
                                                    <span className="text-lg">{l.flag}</span>
                                                    <span>{l.name}</span>
                                                    {lang === l.code && (
                                                        <svg className="w-4 h-4 ml-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}


