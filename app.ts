import express from 'express'
import mongoose from 'mongoose'
import { routes } from './backend/routes/routes'


class App{
    public express: express.Application

    constructor(){
        this.express = express()
        this.database()
        this.middleware()
        this.routes()
        
    }
    
    public middleware(){
        this.express.use(express.json())
    }

    public async database() {
        try {
            await mongoose.connect(
                "mongodb://localhost:27017/bussola"
            );
            console.log("Connect database sucess")
        } catch (error) {
            console.error('Cannot connect to database, error:', error)
        }
    }

    public routes(): void {
        this.express.use(routes)
    }
}

export default new App().express

