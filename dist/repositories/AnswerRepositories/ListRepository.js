"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAnswersRepository = void 0;
const Posts_1 = require("../../models/Mongo/Posts");
const User_1 = __importDefault(require("../../models/User"));
const Answers_1 = __importDefault(require("../../models/Answers"));
const FindAnswersRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    let answers = yield Answers_1.default.findAll({
        include: [
            {
                model: User_1.default,
                as: 'user',
                attributes: ['name']
            }
        ],
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'createdAt']
    });
    answers.map((answer) => __awaiter(void 0, void 0, void 0, function* () {
        let content = yield Posts_1.Post.findById(answer.questionId);
        if (!content) {
            return;
        }
        let temp = Object.assign({}, answer);
        return temp;
    }));
    return answers;
});
exports.FindAnswersRepository = FindAnswersRepository;
