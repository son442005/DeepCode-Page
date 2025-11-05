import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { LangProvider } from './lang'

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <LangProvider>
                <App />
            </LangProvider>
        </React.StrictMode>
    )
}


