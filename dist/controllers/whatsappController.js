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
exports.verifyNumber = exports.sendMessage = exports.addNewConnection = exports.getQRCode = void 0;
const ConnectService_1 = require("../services/WhatsappServices/ConnectService");
const SendMessageService_1 = __importDefault(require("../services/WhatsappServices/SendMessageService"));
const VerifyNumberService_1 = require("../services/WhatsappServices/VerifyNumberService");
const getQRCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, ConnectService_1.getNewQRCode)();
});
exports.getQRCode = getQRCode;
const addNewConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, ConnectService_1.getNewQRCode)();
});
exports.addNewConnection = addNewConnection;
const sendMessage = (req, res) => {
    (0, SendMessageService_1.default)(req.body.phone, req.body.message);
    res.json({
        success: true,
        data: {
            messageSent: true
        }
    });
};
exports.sendMessage = sendMessage;
const verifyNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, VerifyNumberService_1.verifyIfNumberIsOnWhatsapp)(req.body.phone);
    res.json(result);
});
exports.verifyNumber = verifyNumber;
