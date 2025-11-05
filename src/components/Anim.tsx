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

export default FadeUp


