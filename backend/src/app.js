import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

class App{
    constructor(){
        this.server = express()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(productRoutes)
    }
}

export default new App().server