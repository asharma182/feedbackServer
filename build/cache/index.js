"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const redis_1 = __importDefault(require("redis"));
const redisPort = 6379;
exports.client = redis_1.default.createClient(redisPort);
exports.client.on("error", (err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map