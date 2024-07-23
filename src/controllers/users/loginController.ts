import { Request, Response } from "express";
import { LoginService } from "../../services/Entities/UserServices/LoginService";

export const LoginController = async (req: Request, res: Response) => {

  try {
    const resultVerify = await LoginService(req.body)

    if (!resultVerify.success) {
      return res.status(401).json({
        success: false,
        message: resultVerify?.message
      })
    }

    res.send({
      success: true,
      data: resultVerify.data
    })
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }
}