"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.QuestionSchema = new mongoose_1.Schema({
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
});
