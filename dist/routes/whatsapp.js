"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const whatsappController_1 = require("../controllers/whatsappController");
const router = express_1.default.Router();
router.get('/', whatsappController_1.getQRCode);
router.post('/messages', whatsappController_1.sendMessage);
router.post('/verify-number', whatsappController_1.verifyNumber);
exports.default = router;
