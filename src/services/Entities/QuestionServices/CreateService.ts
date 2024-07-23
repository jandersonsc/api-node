import { Questions } from "../../../models/Mongo/Questions";
import { CreateQuestionRepository } from "../../../repositories/QuestionRepositories/CreateRepository";

type CreateData = {
  userId: number;
  active: boolean;
  title: string;
  description: string;
}

export const CreateService = async (request: CreateData) => {

  try {
    // Create data in MongoDB
    const questionCreated = await Questions.create({
      title: request.title,
      description: request.description,
    })

    const question = await CreateQuestionRepository({
      questionId: questionCreated._id.toString(),
      userId: request.userId,
      title: request.title,
      description: request.description,
      active: request.active
    })

    return {
      success: true,
      data: question
    }
  } catch (err) {
    return {
      success: false,
      message: 'Fail to create question',
      error: err
    }
  }
}