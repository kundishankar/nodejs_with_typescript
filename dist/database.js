"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Index {
    connectToMongoDb() {
        const db = 'mongodb://' + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + "/" + process.env.DB + '?authSource=admin';
        mongoose_1.default.connect(db, { directConnection: true }).then((data) => { console.log("db connected"); }).catch(err => console.log(err));
    }
}
exports.index = new Index();
//# sourceMappingURL=database.js.map