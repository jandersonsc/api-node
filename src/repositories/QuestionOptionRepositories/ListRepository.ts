import { Post as PostMongo } from "../../models/Mongo/Posts";
import User from "../../models/User";
import QuestionOptions from "../../models/QuestionOptions";

export const FindQuestionOptionsRepository = async () => {
  let questionOptions = await QuestionOptions.findAll({
    order: [['order', 'ASC']],
  })

  console.log(questionOptions)

  /*questionOptions.map(async (questionOption) => {

    let content = await PostMongo.findById(questionOption.questionId)

    if (!content) {
      return
    }

    let temp = { ...questionOption }
    return temp
  })*/

  return questionOptions
}