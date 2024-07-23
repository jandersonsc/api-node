import { Request, Response } from "express";

export const ListController = (req: Request, res: Response) => {
  res.send({
    success: true
  })
}