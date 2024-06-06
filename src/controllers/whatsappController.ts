import { Request, Response } from "express"
import { getNewQRCode } from "../services/WhatsappServices.ts/ConnectService"
import SendMessage from "../services/WhatsappServices.ts/SendMessageService"
import { verifyIfNumberIsOnWhatsapp } from "../services/WhatsappServices.ts/VerifyNumberService"

export const getQRCode = async (req: Request, res: Response) => {
  getNewQRCode()
}

export const addNewConnection = async () => {
  getNewQRCode()
}

export const sendMessage = (req: Request, res: Response) => {
  SendMessage(req.body.phone, req.body.message)

  res.json({
    success: true,
    data: {
      messageSent: true
    }
  })
}

export const verifyNumber = async (req: Request, res: Response) => {
  const result = await verifyIfNumberIsOnWhatsapp(req.body.phone)
  res.json(result)
}