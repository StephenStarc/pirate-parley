import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import data from './data/users.js'
import PRODUCTS from './data/PRODUCTS.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(data);

        const adminUser = createdUser[0]._id

        const sampleProduct = PRODUCTS.map((product)=>{
            return {...product,user: adminUser}
        })

        await Product.insertMany(sampleProduct)

        console.log(`Data Imported`.green.inverse)
        process.exit()
    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log(`Data Destroyed`.red.inverse)
        process.exit()
    }catch(err){
        console.error(`${err}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}
console.log(process.argv)