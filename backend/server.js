import express from 'express'
import PRODUCTS from './data/PRODUCTS.js'
const port = 5000

const app = express()

app.get('/', (req,res)=>{
res.json(PRODUCTS)
})

app.get('/product/:id',(req,res)=>{
    const product = PRODUCTS.find((p)=>p._id === req.params.id)
    res.json(product)
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})