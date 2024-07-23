import dotenv from 'dotenv'
import app from "./app"

dotenv.config()
const port = process.env.SERVER_PORT

app.listen(port, async () => {
  console.log(`Listening on port ${port}`)
})