import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { AppRoutes } from 'routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const container = document.getElementById('root')
if (container) {
  const root = ReactDOM.createRoot(container)
  const router = createBrowserRouter(AppRoutes)

  root.render(
    <StrictMode>
      <RouterProvider router={router} />;
    </StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
