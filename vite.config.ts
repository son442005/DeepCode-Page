import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // Base path for GitHub Pages project site: https://<user>.github.io/<repo>/
    // Must match repository name to ensure assets resolve correctly
    base: '/DeepCode-Page/',
})


