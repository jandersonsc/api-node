import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import appRouter from './routes'

dotenv.config()

import './database'
import './database/connections/mongo'

const app: Application = express()
const corsOptions: cors.CorsOptions = {
  origin: ['*']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/api', appRouter)

export default app