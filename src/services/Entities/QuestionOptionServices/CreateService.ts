import { CreateQuestionOptionRepository } from "../../../repositories/QuestionOptionRepositories/CreateRepository";

type CreateData = {
  questionId: number;
  value: string;
  order: number;
}

export const CreateService = async (request: CreateData) => {

  try {
    const questionOption = await CreateQuestionOptionRepository({
      questionId: request.questionId,
      value: request.value,
      order: request.order
    })

    return {
      success: true,
      data: questionOption
    }
  } catch (err) {
    return {
      success: false,
      message: 'Fail to create question option'
    }
  }
}