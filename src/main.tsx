import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserCon from './contex/userCon.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <UserCon>
      <BrowserRouter>
    <App /></BrowserRouter>
    </UserCon>
  </StrictMode>,
)
