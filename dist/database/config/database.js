"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
module.exports = {
    "development": {
        "username": `${process.env.DB_POSTGRES_USER}`,
        "password": `${process.env.DB_POSTGRES_PASS}`,
        "database": `${process.env.DB_POSTGRES_NAME}`,
        "host": `${process.env.DB_POSTGRES_HOST}`,
        "port": process.env.DB_POSTGRES_PORT,
        "dialect": "postgres"
    },
    "test": {
        "username": `${process.env.DB_POSTGRES_USER}`,
        "password": `${process.env.DB_POSTGRES_PASS}`,
        "database": "test",
        "host": `${process.env.DB_POSTGRES_HOST}`,
        "port": process.env.DB_POSTGRES_PORT,
        "dialect": "postgres"
    },
    "production": {
        "username": `${process.env.DB_POSTGRES_USER}`,
        "password": `${process.env.DB_POSTGRES_PASS}`,
        "database": `${process.env.DB_POSTGRES_NAME}`,
        "host": `${process.env.DB_POSTGRES_HOST}`,
        "port": process.env.DB_POSTGRES_PORT,
        "dialect": "postgres"
    }
};
