import { Column, Model, Table, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, Default, DataType } from "sequelize-typescript";

@Table({
  timestamps: true
})
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.DATEONLY)
  birthDate: Date;

  @Column(DataType.ENUM('female', 'male', 'other'))
  gender: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  phoneNumber: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  active: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default User