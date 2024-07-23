import { getSocket } from "./ConnectService"

export const verifyIfNumberIsOnWhatsapp = async (phone: number) => {
  const socket = await getSocket()

  socket.ev.on('connection.update', async  (update) => {

    if (update.connection == 'open') {
      const result = await socket.onWhatsApp(phone.toString())
      return result
    }

    return false

  })
}