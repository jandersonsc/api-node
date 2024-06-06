import express from 'express'
import clients from './clients'
import whatsapp from './whatsapp'

const appRouter = express.Router()

appRouter.use('/clients', clients)
appRouter.use('/whatsapp', whatsapp)

export default appRouter