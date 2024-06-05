import express, { Application } from "express"
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const port = process.env.SERVER_PORT

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})