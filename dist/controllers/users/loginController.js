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
exports.LoginController = void 0;
const LoginService_1 = require("../../services/Entities/UserServices/LoginService");
const LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultVerify = yield (0, LoginService_1.LoginService)(req.body);
        if (!resultVerify.success) {
            return res.status(401).json({
                success: false,
                message: resultVerify === null || resultVerify === void 0 ? void 0 : resultVerify.message
            });
        }
        res.send({
            success: true,
            data: resultVerify.data
        });
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }
});
exports.LoginController = LoginController;
