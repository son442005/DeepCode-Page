import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
            extend: {
                colors: {
                    primary: '#0EA5E9', // Modern sky blue - professional and friendly
                    secondary: '#F59E0B', // Warm amber - for accents
                    accent: '#10B981', // Emerald green - for success/positive elements
                    dark: '#1E293B', // Soft navy - easier on eyes than pure black
                    background: '#FF9900', // Warm cream - soft and inviting
                    

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


