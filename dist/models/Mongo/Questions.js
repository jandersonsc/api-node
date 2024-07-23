"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questions = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const QuestionSchema_1 = require("./Schemas/QuestionSchema");
exports.Questions = mongoose_1.default.model('Questions', QuestionSchema_1.QuestionSchema);
