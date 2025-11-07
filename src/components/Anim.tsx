import React from 'react'
import { useInView } from '../hooks/useInView'

export const FadeUp = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
    const ref = useInView<HTMLDivElement>()
    return (
        <div ref={ref} className={`animate-fade-up ${className || ''}`} style={style}>
            {children}
        </div>
    )
}

export const SlideIn = ({ children, className, style, direction = 'left' }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; direction?: 'left' | 'right' }) => {
    const ref = useInView<HTMLDivElement>()
    const animationClass = direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
    return (
        <div ref={ref} className={`${animationClass} ${className || ''}`} style={style}>
            {children}
        </div>
    )
}

export default FadeUp


