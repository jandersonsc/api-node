import { Column, Model, Table, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./User";
import Questions from "./Questions";

@Table({
  timestamps: true
})
class QuestionOptions extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @ForeignKey(() => Questions)
  @Column(DataType.BIGINT)
  questionId: number

  @BelongsTo(() => Questions)
  question: Questions

  @Column(DataType.STRING)
  value: string

  @Column(DataType.INTEGER)
  order: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}

export default QuestionOptions