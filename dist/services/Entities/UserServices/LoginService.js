"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.LoginService = void 0;
const bcrypt_1 = require("bcrypt");
const FindRepository_1 = require("../../../repositories/UserRepositories/FindRepository");
const jwt = __importStar(require("jsonwebtoken"));
const LoginService = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, FindRepository_1.FindUserRepository)({ email: request.username });
        if (users.length == 0) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        const user = users[0];
        const verifyPassword = yield (0, bcrypt_1.compare)(request.password, user.password);
        if (!verifyPassword) {
            return {
                success: false,
                message: 'Invalid credentials'
            };
        }
        const token = jwt.sign({
            id: user.id,
            name: user.name
        }, 'sflk;jsafljal;fjlafj', {
            expiresIn: '1d'
        });
        return {
            success: true,
            data: { user, token }
        };
    }
    catch (err) {
        return {
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || ''
        };
    }
});
exports.LoginService = LoginService;
