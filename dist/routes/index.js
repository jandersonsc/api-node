"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import clients from './clients'
const users_1 = __importDefault(require("./users"));
const posts_1 = __importDefault(require("./posts"));
const questions_1 = __importDefault(require("./questions"));
const answers_1 = __importDefault(require("./answers"));
const questionOptions_1 = __importDefault(require("./questionOptions"));
const appRouter = express_1.default.Router();
appRouter.use('/users', users_1.default);
appRouter.use('/posts', posts_1.default);
appRouter.use('/questions', questions_1.default);
appRouter.use('/answers', answers_1.default);
appRouter.use('/questionOptions', questionOptions_1.default);
// appRouter.use('/clients', clients)
exports.default = appRouter;
