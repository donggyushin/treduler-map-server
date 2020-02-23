"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.set('useCreateIndex', true);
var env = process.env.NODE_ENV;
var endpoint = process.env.DB_END_POINT_PRODUCTION;
// if (env === 'development') {
//     endpoint = process.env.DB_END_POINT
// }
console.log('endpoint: ', endpoint);
mongoose_1.default.connect(endpoint || '', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { return console.log('db connection!'); });
