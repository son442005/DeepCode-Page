import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
            extend: {
                colors: {
                    primary: '#1F66FF',
                    // 'background': '#F9F5EC',
                    secondary: '#0EA5E9',
                    dark: '#0B1220',
                    rbg: '#B7B7B7',
                }
            }
    },
    plugins: [],
} satisfies Config


