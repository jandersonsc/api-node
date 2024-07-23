import { Column, Model, Table, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import User from "./User";
import QuestionOptions from "./QuestionOptions";

@Table({
  timestamps: true
})
class Questions extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  userId: number

  @BelongsTo(() => User)
  user: User

  @HasMany(() => QuestionOptions)
  options: QuestionOptions

  @Column(DataType.STRING)
  questionId: string

  @Column(DataType.STRING)
  title: string

  @Column(DataType.TEXT)
  description: string

  @Column(DataType.BOOLEAN)
  active: boolean

  @Column(DataType.DATE)
  activatedAt: Date

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}

export default Questions