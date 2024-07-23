import { Request, Response } from "express";
import { FindQuestionsRepository } from "../../repositories/QuestionRepositories/ListRepository";

export const ListController = async (req: Request, res: Response) => {

  const questions = await FindQuestionsRepository(req.query)

  res.json({
    success: true,
    data: questions
  })
}