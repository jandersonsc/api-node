import QuestionOptions from "../../models/QuestionOptions";

type CreateData = {
  questionId: number;
  value: string;
  order?: number;
}

export const CreateQuestionOptionRepository = async (payload: CreateData) => {
  return await QuestionOptions.create(payload)
}