import { getSocket } from "./ConnectService"
import { MessageType } from "@whiskeysockets/baileys"

const SendMessage = async (phone: string, message: string) => {

  const socket = await getSocket()

  socket.ev.on('connection.update', (update) => {
    if (update.connection == 'open') {
      socket.sendMessage(phone + '@s.whatsapp.net', {
        text: message
      })
    }
  })

}

export default SendMessage