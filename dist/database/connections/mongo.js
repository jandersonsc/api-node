"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const urlConnection = `mongodb://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASS}@${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/`;
mongoose_1.default.connect(urlConnection, {
    dbName: process.env.DB_MONGO_NAME
});
