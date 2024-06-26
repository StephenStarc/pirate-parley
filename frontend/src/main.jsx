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
import LoginScreen from './pages/LoginScreen.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterScreen from './pages/RegisterScreen.jsx'
import ShippingPage from './pages/ShippingPage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import PlaceOrderPage from './pages/PlaceOrderPage.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App />},
{path:'/product/:id',element:<ProductDetail />},
{path:'/cart',element:<CartScreen/>},
{path:'/login',element:<LoginScreen/>},
{path:'/register',element:<RegisterScreen/>},
{path:'/shipping',element:<PrivateRoute Component={ShippingPage}/>},
{path:'/payment',element:<PrivateRoute Component={PaymentPage}/>},
{path:'/placeorder',element:<PrivateRoute Component={PlaceOrderPage}/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
