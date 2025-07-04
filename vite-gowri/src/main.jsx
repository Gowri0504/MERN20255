
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
// import { UserContext } from './hooks/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <UserContext> */}
      <App />
    {/* </UserContext> */}
    </BrowserRouter>

  </StrictMode>,
)