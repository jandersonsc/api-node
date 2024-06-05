import { Request, Response } from "express"

export const createClient = async (request: Request, response: Response) => {

}

export const listClients = async (request: Request, response: Response) => {
  response.send('teste')
}