import { Request, Response } from "express";
import { FindQuestionOptionsRepository } from "../../repositories/QuestionOptionRepositories/ListRepository";

export const ListController = async (req: Request, res: Response) => {

  const questionOptions = await FindQuestionOptionsRepository()

  res.json({
    success: true,
    data: questionOptions
  })
}