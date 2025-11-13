import { useEffect, useRef } from 'react'

export const useInView = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
    const ref = useRef<T | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const addInViewClass = () => {
            el.classList.add('is-inview')
        }

        const isObserverSupported = typeof window !== 'undefined' && typeof window.IntersectionObserver !== 'undefined'
        const mediaQuery = typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)') : undefined

        if (!isObserverSupported) {
            addInViewClass()
            return
        }

        let timeoutId: number | undefined

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-inview')
                }
            })
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15, ...(options || {}) })

        observer.observe(el)

        if (mediaQuery?.matches) {
            addInViewClass()
        }

        const handleMediaChange = (event: MediaQueryListEvent) => {
            if (event.matches) {
                addInViewClass()
            }
        }

        mediaQuery?.addEventListener('change', handleMediaChange)

        timeoutId = window.setTimeout(() => {
            if (!el.classList.contains('is-inview')) {
                addInViewClass()
            }
        }, 1200)

        return () => {
            observer.disconnect()
            mediaQuery?.removeEventListener('change', handleMediaChange)
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [options?.root, options?.rootMargin, options?.threshold])

    return ref
}

export default useInView


