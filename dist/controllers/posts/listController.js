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
exports.ListController = void 0;
const ListRepository_1 = require("../../repositories/PostRepositories/ListRepository");
const ListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield (0, ListRepository_1.FindPostsRepository)();
    res.json({
        success: true,
        data: posts
    });
    return;
    res.send({
        success: true,
        data: [
            {
                id: 1,
                date: '2024-07-03T01:45:46.863Z',
                user: {
                    id: 1,
                    name: 'Janderson Soares'
                },
                content: {
                    type: 'text',
                    value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
                }
            },
            {
                id: 2,
                date: '2024-07-03T01:45:46.863Z',
                user: {
                    id: 1,
                    name: 'Janderson Soares'
                },
                content: {
                    type: 'text',
                    value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
                }
            },
            {
                id: 3,
                date: '2024-07-03T01:45:46.863Z',
                user: {
                    id: 1,
                    name: 'Janderson Soares'
                },
                content: {
                    type: 'text',
                    value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
                }
            },
            {
                id: 4,
                date: '2024-07-03T01:45:46.863Z',
                user: {
                    id: 1,
                    name: 'Janderson Soares'
                },
                content: {
                    type: 'text',
                    value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
                }
            }
        ]
    });
});
exports.ListController = ListController;
