import { site } from '../constants'

export const Footer = () => {
    return (
        <footer className="mt-20 border-t border-slate-200 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt={`${site.company} logo`} className="h-8 w-auto object-contain" />
                    <span className="text-slate-700">© {new Date().getFullYear()} {site.company}</span>
                </div>
                <div className="text-slate-600 text-sm">Made with ❤️</div>
            </div>
        </footer>
    )
}


