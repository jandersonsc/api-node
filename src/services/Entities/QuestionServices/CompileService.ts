import { CompileQuestionRepository } from "../../../repositories/QuestionRepositories/CompileRepository";

type Data = {
  questionId: number;
}

export const CompileService = async (request: Data) => {

  try {
    
    const result = await CompileQuestionRepository(request.questionId)

    // TODO: Calcular porcentagem

    return {
      success: true,
      data: result
    }
  } catch (err) {
    return {
      success: false,
      message: 'Fail to compile question',
      error: err
    }
  }
}