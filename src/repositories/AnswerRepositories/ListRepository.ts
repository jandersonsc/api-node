import { Post as PostMongo } from "../../models/Mongo/Posts";
import User from "../../models/User";
import Answers from "../../models/Answers";

export const FindAnswersRepository = async () => {
  let answers = await Answers.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['name']
      }
    ],
    order: [['createdAt', 'DESC']],
    attributes: ['id', 'createdAt']
  })

  answers.map(async (answer) => {

    let content = await PostMongo.findById(answer.questionId)

    if (!content) {
      return
    }

    let temp = { ...answer }
    return temp
  })

  return answers
}