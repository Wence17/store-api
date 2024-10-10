// to populate the database once instead of adding them one after the other.
require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./model/product')
const jsonProducts = require('./products.json')

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('success!!!!')
        process.exit(0)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

start()