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
const bcrypt_1 = require("bcrypt");
const CreateRepository_1 = require("../../../repositories/UserRepositories/CreateRepository");
const CreateService = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        request.password = yield (0, bcrypt_1.hash)(request.password, 8);
        const user = yield (0, CreateRepository_1.CreateUserRepository)(request);
        return {
            success: true,
            data: user
        };
    }
    catch (err) {
        return {
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || ''
        };
    }
});
exports.CreateService = CreateService;
