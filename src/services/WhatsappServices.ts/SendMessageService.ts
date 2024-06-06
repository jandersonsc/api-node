import { getSocket } from "./ConnectService"

const SendMessage = async (phone: number, message: string) => {

  const socket = await getSocket()
  socket.sendMessage('', {
    text: message
  })

}

export default SendMessage