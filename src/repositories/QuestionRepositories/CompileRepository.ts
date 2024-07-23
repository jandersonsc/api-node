import { QueryTypes } from "sequelize"
import sequelize from "../../database"

export const CompileQuestionRepository = async (questionId: number) => {

  const sql = `
    select
    qo.id::int, qo."value", COUNT(a."id")::int as total FROM "Answers" a RIGHT JOIN "QuestionOptions" qo ON qo."id" = a."questionOptionId"
    where
    qo."questionId" = ${questionId}
    GROUP BY qo."id"
    ORDER BY qo.order
    `

  const result = await sequelize.query(sql, {
    type: QueryTypes.SELECT
  })

  return result
}