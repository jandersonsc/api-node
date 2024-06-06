import express, { Application } from 'express'
import appRouter from './routes'
import { getNewQRCode } from './services/WhatsappServices.ts/ConnectService'

const app: Application = express()
app.use(express.json())
app.use('/api', appRouter)

// getNewQRCode()

export default app