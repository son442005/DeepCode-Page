import { nav, site } from '../constants'
import { useEffect, useState } from 'react'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleToggle = () => setIsOpen((v) => !v)

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isScrolled ? 'bg-white/70 backdrop-blur border-b border-slate-200' : 'bg-transparent'}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-white ring-1 ring-slate-300 shadow-sm flex items-center justify-center overflow-hidden">
                            <img src="/logo.svg" alt={`${site.company} logo`} className="max-h-8 max-w-8 object-contain" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{site.company}</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {nav.map((n) => (
                            <button key={n.href} onClick={() => handleNavClick(n.href)} className="text-sm text-slate-700 hover:text-slate-900 transition">
                                {n.label}
                            </button>
                        ))}
                        <a href="#contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 transition">
                            Liên hệ
                        </a>
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
                            {nav.map((n) => (
                                <button key={n.href} onClick={() => handleNavClick(n.href)} className="rounded px-3 py-2 text-left hover:bg-black/10 text-slate-800">
                                    {n.label}
                                </button>
                            ))}
                            <a href="#contact" className="rounded bg-primary px-3 py-2 text-center font-medium text-white hover:bg-blue-500">Liên hệ</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}


