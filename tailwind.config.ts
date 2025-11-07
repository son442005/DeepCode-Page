import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
            extend: {
                colors: {
                    primary: '#FF6B35',
                    // 'background': '#F9F5EC',
                    secondary: '#FF8C42',
                    dark: '#0B1220',
                    rbg: '#B7B7B7',
                },
                fontFamily: {
                    sans: [
                        'Inter',
                        'ui-sans-serif',
                        'system-ui',
                        '-apple-system',
                        'Segoe UI',
                        'Roboto',
                        'Noto Sans',
                        'Helvetica Neue',
                        'Arial',
                        'sans-serif',
                        'Apple Color Emoji',
                        'Segoe UI Emoji',
                        'Segoe UI Symbol',
                    ],
                    serif: [
                        'Noto Serif',
                        'Georgia',
                        'Cambria',
                        'Times New Roman',
                        'Times',
                        'serif',
                    ],
                }
            }
    },
    plugins: [],
} satisfies Config


