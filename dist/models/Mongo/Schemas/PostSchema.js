"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
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
});
