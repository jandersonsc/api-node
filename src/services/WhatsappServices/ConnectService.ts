import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys"

const fileNameWhatsappConnection = 'whatsappDataConnection'

export const getNewQRCode = async () => {

  const { state, saveCreds } = await useMultiFileAuthState(fileNameWhatsappConnection)

  const sock = makeWASocket({
    //printQRInTerminal: true,
    auth: state
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('presence.update', (json) => {
    const id = '558897322038@s.whatsapp.net'

    //if (json.id == id) {
    //}

  })

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update

    if (connection == 'open' || connection == undefined) {
      await sock.presenceSubscribe('558897322038@s.whatsapp.net')
    }
  })

}

export const getSocket = async () => {
  const { state } = await useMultiFileAuthState(fileNameWhatsappConnection)
  return makeWASocket({ auth: state })
}