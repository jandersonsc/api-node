import { Schema } from "mongoose";

export const QuestionSchema = new Schema({
  id: String,
  questionId: String,
  title: String,
  description: String,
  likes: [{
    userId: Number,
    createdAt: Date
  }],
  answers: [{
    user: String,
    value: String,
    createdAt: Date
  }],
  comments: [{
    userId: Number,
    comment: String,
    createdAt: Date
  }],
  shares: [{
    userId: Number,
    createdAt: Date
  }]
})