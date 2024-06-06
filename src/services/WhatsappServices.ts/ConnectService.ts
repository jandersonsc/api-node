import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys"

const fileNameWhatsappConnection = 'whatsappDataConnection'

export const getNewQRCode = async () => {

  const { state, saveCreds } = await useMultiFileAuthState(fileNameWhatsappConnection)

  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state
  })

  sock.ev.on('creds.update', saveCreds)
}

export const getSocket = async () => {
  const { state } = await useMultiFileAuthState(fileNameWhatsappConnection)
  return makeWASocket({ auth: state })
}