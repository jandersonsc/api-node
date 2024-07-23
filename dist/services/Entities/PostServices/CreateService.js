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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateService = void 0;
const Posts_1 = require("../../../models/Mongo/Posts");
const CreateRepository_1 = require("../../../repositories/PostRepositories/CreateRepository");
const CreateService = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create data in MongoDB
        const postCreated = yield Posts_1.Post.create({
            type: request.type,
            content: request.content,
            likes: [],
            comments: [],
            shares: []
        });
        const post = yield (0, CreateRepository_1.CreatePostRepository)({
            postId: postCreated._id.toString(),
            userId: request.userId
        });
        return {
            success: true,
            data: {
                post,
                postCreated
            }
        };
    }
    catch (err) {
        return {
            success: false,
            message: 'Fail to create post'
        };
    }
});
exports.CreateService = CreateService;
