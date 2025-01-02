import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import { ToastContainer } from 'react-toastify';
import AllContext from './utils/AllContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllContext>
    <RouterProvider router={routes}/>
    </AllContext>
    <ToastContainer/>
  </StrictMode>,
)
