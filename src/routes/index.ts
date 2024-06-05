import express from 'express'
import clients from './clients'

const appRouter = express.Router()

appRouter.use('/clients', clients)

export default appRouter