import { Request, Response } from "express";
import { FindAnswersRepository } from "../../repositories/AnswerRepositories/ListRepository";

export const ListController = async (req: Request, res: Response) => {

  const posts = await FindAnswersRepository()

  res.json({
    success: true,
    data: posts
  })
}