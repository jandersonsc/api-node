"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./User"));
const Questions_1 = __importDefault(require("./Questions"));
const QuestionOptions_1 = __importDefault(require("./QuestionOptions"));
let Answers = class Answers extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BIGINT)
], Answers.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.default),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BIGINT)
], Answers.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.default)
], Answers.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Questions_1.default),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BIGINT)
], Answers.prototype, "questionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Questions_1.default)
], Answers.prototype, "question", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => QuestionOptions_1.default),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BIGINT)
], Answers.prototype, "questionOptionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => QuestionOptions_1.default)
], Answers.prototype, "questionOptions", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], Answers.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], Answers.prototype, "updatedAt", void 0);
Answers = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true
    })
], Answers);
exports.default = Answers;
