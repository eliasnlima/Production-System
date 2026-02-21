import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import rawMaterialsRoutes from './routes/rawMaterialsRoutes.js'
import productionRoutes from './routes/productionRoutes.js'
import cors from 'cors'


dotenv.config()

class App{
    constructor(){
        this.server = express()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
    }
    

    routes(){
        this.server.use(productRoutes)
        this.server.use(rawMaterialsRoutes)
        this.server.use(productionRoutes)
    }
}

export default new App().server