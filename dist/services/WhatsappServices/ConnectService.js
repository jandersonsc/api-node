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
exports.getSocket = exports.getNewQRCode = void 0;
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const fileNameWhatsappConnection = 'whatsappDataConnection';
const getNewQRCode = () => __awaiter(void 0, void 0, void 0, function* () {
    const { state, saveCreds } = yield (0, baileys_1.useMultiFileAuthState)(fileNameWhatsappConnection);
    const sock = (0, baileys_1.default)({
        //printQRInTerminal: true,
        auth: state
    });
    sock.ev.on('creds.update', saveCreds);
    sock.ev.on('presence.update', (json) => {
        const id = '558897322038@s.whatsapp.net';
        //if (json.id == id) {
        //}
    });
    sock.ev.on('connection.update', (update) => __awaiter(void 0, void 0, void 0, function* () {
        const { connection, lastDisconnect } = update;
        if (connection == 'open' || connection == undefined) {
            yield sock.presenceSubscribe('558897322038@s.whatsapp.net');
        }
    }));
});
exports.getNewQRCode = getNewQRCode;
const getSocket = () => __awaiter(void 0, void 0, void 0, function* () {
    const { state } = yield (0, baileys_1.useMultiFileAuthState)(fileNameWhatsappConnection);
    return (0, baileys_1.default)({ auth: state });
});
exports.getSocket = getSocket;
