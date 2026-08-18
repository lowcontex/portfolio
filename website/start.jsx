import React from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioPage from './PortfolioPage.jsx'
import './portfolio.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>,
)
