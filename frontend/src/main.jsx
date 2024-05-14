import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/custom.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail.jsx'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import CartScreen from './pages/CartScreen.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App />},
{path:'/product/:id',element:<ProductDetail />},
{path:'/cart',element:<CartScreen/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
