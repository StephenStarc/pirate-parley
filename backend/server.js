import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import PRODUCTS from './data/PRODUCTS.js'
import cors from 'cors'

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.get('/api/products', (req,res)=>{
res.json(PRODUCTS)
})

app.get('/product/:id',(req,res)=>{
    const product = PRODUCTS.find((p)=>p._id === req.params.id)
    res.json(product)
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})