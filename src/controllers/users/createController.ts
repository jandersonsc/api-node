import { Request, Response } from "express";
import { CreateService } from "../../services/Entities/UserServices/CreateService";

export const CreateController = async (req: Request, res: Response) => {

  const result = await CreateService(req.body)

  if (!result.success) {
    res.status(500).json({
      success: false,
      message: result.message
    })
    return
  }

  res.send({
    success: true,
    data: result.data
  })
}