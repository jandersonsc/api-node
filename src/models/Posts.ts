import { Column, Model, Table, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./User";

@Table({
  timestamps: true
})
class Post extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  userId: number;

  @BelongsTo(() => User)
  user: User

  @Column(DataType.STRING)
  postId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Post