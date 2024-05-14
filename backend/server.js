import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './config/db.js'
import routes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const port = process.env.PORT || 5000
connectDB()
const app = express()

app.use(cors())

app.use('/api/products', routes)

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})