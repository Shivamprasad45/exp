"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (id, isPremium) => {
    return jsonwebtoken_1.default.sign({ id, isPremium }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
