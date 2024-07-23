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
exports.FindPostsRepository = void 0;
const Posts_1 = __importDefault(require("../../models/Posts"));
const Posts_2 = require("../../models/Mongo/Posts");
const User_1 = __importDefault(require("../../models/User"));
const FindPostsRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    let posts = yield Posts_1.default.findAll({
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
    posts.map((post) => __awaiter(void 0, void 0, void 0, function* () {
        let content = yield Posts_2.Post.findById(post.postId);
        if (!content) {
            return;
        }
        let temp = Object.assign({}, post);
        return temp;
    }));
    return posts;
});
exports.FindPostsRepository = FindPostsRepository;
