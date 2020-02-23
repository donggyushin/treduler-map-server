"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var login_1 = require("../controllers/user/login");
var newAccout_1 = require("../controllers/user/newAccout");
var router = express_1.default.Router();
router.post('/login', login_1.Login);
router.post('/new-account', newAccout_1.MakeNewAccount);
exports.default = router;
