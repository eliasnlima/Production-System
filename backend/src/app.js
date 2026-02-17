import express from 'express'
import dotenv from 'dotenv'
import pool from './database/connection.js'

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
        this.server.get('/', (req, res) => {
            res.json({server: "ok"})
        })
    }
}

export default new App().server