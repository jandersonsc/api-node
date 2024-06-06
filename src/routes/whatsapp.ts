import express from 'express'
import { getQRCode, sendMessage, verifyNumber } from '../controllers/whatsappController'

const router = express.Router()

router.get('/', getQRCode)
router.post('/messages', sendMessage)
router.post('/verify-number', verifyNumber)

export default router