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
exports.verifyIfNumberIsOnWhatsapp = void 0;
const ConnectService_1 = require("./ConnectService");
const verifyIfNumberIsOnWhatsapp = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const socket = yield (0, ConnectService_1.getSocket)();
    socket.ev.on('connection.update', (update) => __awaiter(void 0, void 0, void 0, function* () {
        if (update.connection == 'open') {
            const result = yield socket.onWhatsApp(phone.toString());
            return result;
        }
        return false;
    }));
});
exports.verifyIfNumberIsOnWhatsapp = verifyIfNumberIsOnWhatsapp;
