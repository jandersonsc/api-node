import { CreateAnswerRepository } from "../../../repositories/AnswerRepositories/CreateRepository";

type CreateData = {
  userId: number;
  questionId: number;
  questionOptionId: number;
}

export const CreateService = async (request: CreateData) => {

  try {
    const answer = await CreateAnswerRepository({
      questionId: request.questionId,
      questionOptionId: request.questionOptionId,
      userId: request.userId
    })

    return {
      success: true,
      data: answer
    }
  } catch (err) {
    return {
      success: false,
      message: 'Fail to create answer'
    }
  }
}