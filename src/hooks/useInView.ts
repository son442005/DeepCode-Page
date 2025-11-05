import { useEffect, useRef } from 'react'

export const useInView = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
    const ref = useRef<T | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-inview')
                }
            })
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15, ...(options || {}) })

        observer.observe(el)
        return () => observer.disconnect()
    }, [options])

    return ref
}

export default useInView


