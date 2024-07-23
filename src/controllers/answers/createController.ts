import { Request, Response } from "express";
import { CreateService } from "../../services/Entities/AnswerServices/CreateService";

export const CreateController = async (req: Request, res: Response) => {

  const result = await CreateService(req.body)

  res.send({
    success: true,
    data: result
  })
}