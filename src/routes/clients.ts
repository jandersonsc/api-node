import express from 'express'
import { createClient, listClients } from '../controllers/clientController'

const router = express.Router()

router.get('/', listClients)
router.post('/', createClient)

export default router