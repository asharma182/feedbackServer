"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
async function startServer() {
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 3001;
    await require('./loaders').default({ expressApp: app });
    app.listen(PORT, err => {
        if (err) {
            console.log(err);
            process.exit(1);
            return;
        }
        console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️ 
      ################################################
    `);
    });
}
startServer();
//# sourceMappingURL=app.js.map