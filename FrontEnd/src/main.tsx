import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from './components/login/Login.tsx'

import GlobalStyle from './styles/index.ts'  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Login />
  </StrictMode>,
)
