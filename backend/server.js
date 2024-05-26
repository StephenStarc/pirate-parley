import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './config/db.js'
import orderRoutes from './routes/orderRoutes.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'

const port = process.env.PORT || 5000
connectDB()
const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())
app.use(cookieParser()) // to access cookies (req.cookies.jwt)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})