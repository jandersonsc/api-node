"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = require("../controllers/users/loginController");
const createController_1 = require("../controllers/users/createController");
const listController_1 = require("../controllers/users/listController");
const router = express_1.default.Router();
router.get('/', listController_1.ListController);
router.post('/', createController_1.CreateController);
router.post('/auth', loginController_1.LoginController);
exports.default = router;
