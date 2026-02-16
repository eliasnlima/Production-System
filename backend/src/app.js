import express from 'express'

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