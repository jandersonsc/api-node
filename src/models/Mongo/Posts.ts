import mongoose from "mongoose";
import { PostSchema } from "./Schemas/PostSchema";

export const Post = mongoose.model('Post', PostSchema)
