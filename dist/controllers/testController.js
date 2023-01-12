"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testController = void 0;
const middlewares_1 = require("../middlewares");
class TestController {
    constructor() {
        this.test1 = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.name);
            console.log(middlewares_1.middleware.getPublicKey());
            res.send("Hello world welcome!!");
        });
    }
}
exports.testController = new TestController();
//# sourceMappingURL=testController.js.map