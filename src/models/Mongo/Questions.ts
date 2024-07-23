import mongoose from "mongoose";
import { QuestionSchema } from "./Schemas/QuestionSchema";

export const Questions = mongoose.model('Questions', QuestionSchema)
