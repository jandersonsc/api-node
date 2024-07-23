import { Request, Response } from "express";
import { CompileService } from "../../services/Entities/QuestionServices/CompileService";

export const CompiledController = async (req: Request, res: Response) => {

  const result = await CompileService({
    questionId: parseInt(req.params.id)
  })

  res.send({
    success: true,
    data: result
  })
}