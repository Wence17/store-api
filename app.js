require('dotenv').config()
require('express-async-errors')
const express =require('express')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')


// async errors

const app = express()
const url = process.env.MONGODB_URI

//middleware
app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})


//products route
app.use('/api/v1/products', productRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000
 
const start = async ()=>{
    try {
        //connectDB
        await connectDB(url)
        
        app.listen(port, ()=>{
            console.log("server is running on port " + port +'...');
            
        })

    } catch (error) {
        console.log(error);
        
    }
}

start()