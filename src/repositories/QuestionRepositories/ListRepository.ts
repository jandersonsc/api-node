import { Questions as QuestionsMongo } from "../../models/Mongo/Questions";
import User from "../../models/User";
import Questions from "../../models/Questions";
import QuestionOptions from "../../models/QuestionOptions";
import { Includeable } from "sequelize";

export const FindQuestionsRepository = async (filters: {} | null) => {

  const includes = [
    {
      model: User,
      as: 'user',
      attributes: ['name']
    },
    {
      model: QuestionOptions,
      as: 'options'
    }
  ] as Includeable[]

  let questions = await Questions.findAll({
    include: includes,
    order: [
      ['createdAt', 'DESC'],
      ['options', 'order', 'ASC']
    ],
    attributes: ['id', 'title', 'description', 'createdAt']
  })

  questions.map(async (question) => {

    let content = await QuestionsMongo.findById(question.questionId)

    if (!content) {
      return
    }

    let temp = { ...question }
    return temp
  })

  return questions
}