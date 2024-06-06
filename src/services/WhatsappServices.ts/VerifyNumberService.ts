import { getSocket } from "./ConnectService"

export const verifyIfNumberIsOnWhatsapp = async (phone: number) => {
  const socket = await getSocket()
  const result = await socket.onWhatsApp(phone.toString())

  return result
}