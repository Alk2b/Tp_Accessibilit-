import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div 
      role="application"
      aria-label="Alinia application"
      lang="fr"
      tabIndex="-1"
    >
      <App />
    </div>
  </StrictMode>,
)