import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'vi' | 'en'

type LangContextValue = {
    lang: Lang
    setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue | undefined>(undefined)

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'vi')

    useEffect(() => {
        document.documentElement.lang = lang
        localStorage.setItem('lang', lang)
    }, [lang])

    const value = useMemo(() => ({ lang, setLang }), [lang])
    return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => {
    const ctx = useContext(LangContext)
    if (!ctx) throw new Error('useLang must be used within LangProvider')
    return ctx
}


