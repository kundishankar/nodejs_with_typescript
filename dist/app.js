"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = require("http");
const routes_1 = require("./routes/routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const httpServer = (0, http_1.createServer)(app);
function startApp() {
    app.use('/hello', (req, res) => {
        res.send('Hello1!!');
    });
    app.use('/test', routes_1.router1);
    httpServer.listen(process.env.PORT, () => { console.log(`Server started in the Port : ${process.env.PORT}`); });
}
startApp();
//# sourceMappingURL=app.js.map