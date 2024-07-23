import { Column, Model, Table, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./User";
import Questions from "./Questions";
import QuestionOptions from "./QuestionOptions";

@Table({
  timestamps: true
})
class Answers extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  userId: number;

  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => Questions)
  @Column(DataType.BIGINT)
  questionId: number;

  @BelongsTo(() => Questions)
  question: Questions

  @ForeignKey(() => QuestionOptions)
  @Column(DataType.BIGINT)
  questionOptionId: number;

  @BelongsTo(() => QuestionOptions)
  questionOptions: Questions

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Answers