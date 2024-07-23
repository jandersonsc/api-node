"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("../models/User"));
const Posts_1 = __importDefault(require("../models/Posts"));
const sequelize = new sequelize_typescript_1.Sequelize(`${process.env.DB_POSTGRES_NAME}`, `${process.env.DB_POSTGRES_USER}`, `${process.env.DB_POSTGRES_PASS}`, {
    host: `${process.env.DB_POSTGRES_HOST}`,
    port: process.env.DB_POSTGRES_PORT,
    dialect: 'postgres'
});
sequelize.addModels([User_1.default, Posts_1.default]);
exports.default = sequelize;
