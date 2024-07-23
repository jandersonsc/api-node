import { Schema } from "mongoose";

export const PostSchema = new Schema({
  id: String,
  postId: String,
  type: String,
  content: String,
  legend: String,
  likes: [{
    userId: Number,
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