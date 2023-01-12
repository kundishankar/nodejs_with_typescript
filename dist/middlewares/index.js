"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
var fs = require('fs');
class Middleware {
    constructor() {
        this.getPublicKey = () => {
            const fileName = 'dev_public_key.pem';
            const filePath = path_1.default.join(__dirname, '..', '..') + '/app/src/keys/' + fileName;
            //console.log(filePath);
            const publicKey = fs.readFileSync(filePath, 'utf8');
            const payload = {
                name: 'Shankar Kundi',
                userId: 123,
                accessTypes: [
                    'getTeams',
                    'addTeams',
                    'updateTeams',
                    'deleteTeams'
                ]
            };
            //   const signInOptions: any = {
            //     algorithm: 'RS256',
            //     expiresIn: '1h'
            //   };
            //var token: any = jwt.sign(payload, publicKey, signInOptions);
            var token = jsonwebtoken_1.default.sign(payload, 'shhhhh');
            var decoded = jsonwebtoken_1.default.verify(token, 'shhhhh');
            //console.log(decoded.foo)
            //console.log(publicKey);
            return token;
        };
    }
}
exports.middleware = new Middleware();
//# sourceMappingURL=index.js.map