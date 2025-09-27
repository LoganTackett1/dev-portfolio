import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TesseractPortfolio from './TesseractPortfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TesseractPortfolio />
  </StrictMode>,
)
