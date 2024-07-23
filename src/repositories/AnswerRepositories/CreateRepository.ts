import Answers from "../../models/Answers";

type CreateData = {
  userId: number;
  questionId: number;
  questionOptionId: number;
}

export const CreateAnswerRepository = async (payload: CreateData) => {
  return await Answers.create(payload)
}