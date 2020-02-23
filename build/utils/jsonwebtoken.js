"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.createToken = function (id) {
    return jsonwebtoken_1.default.sign({ id: id }, process.env.JSONWEBTOKEN_SECRETKET || '');
};
exports.exportId = function (token) {
    var decoded = jsonwebtoken_1.default.verify(token, process.env.JSONWEBTOKEN_SECRETKET || '');
    return decoded.id;
};
