import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import User from '../models/User';
import Post from '../models/Posts';
import Questions from '../models/Questions';
import QuestionOptions from '../models/QuestionOptions';
import Answers from '../models/Answers';

dotenv.config()

const sequelize = new Sequelize(
  `${process.env.DB_POSTGRES_NAME}`,
  `${process.env.DB_POSTGRES_USER}`,
  `${process.env.DB_POSTGRES_PASS}`, {
  host: `${process.env.DB_POSTGRES_HOST}`,
  port: process.env.DB_POSTGRES_PORT as unknown as number,
  dialect: 'postgres',
  logging: false
});

sequelize.addModels([User, Post, Questions, QuestionOptions, Answers])

export default sequelize