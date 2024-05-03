import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/custom.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App />},
{path:'/product/:id',element:<ProductDetail />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
