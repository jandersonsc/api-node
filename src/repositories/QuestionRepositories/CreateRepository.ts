import Questions from "../../models/Questions";

type CreateData = {
  userId: number;
  questionId: string;
  title: string;
  description?: string;
  active: boolean;
}

export const CreateQuestionRepository = async (payload: CreateData) => {
  return await Questions.create(payload)
}