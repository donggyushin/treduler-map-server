"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    profile: String,
    phone: String,
});
var UserModel = mongoose_1.model('user', userSchema);
exports.default = UserModel;
