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
const ListRepository_1 = require("../../repositories/AnswerRepositories/ListRepository");
const ListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield (0, ListRepository_1.FindAnswersRepository)();
    res.json({
        success: true,
        data: posts
    });
});
exports.ListController = ListController;
