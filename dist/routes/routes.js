"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router1 = void 0;
const express_1 = require("express");
const testController_1 = require("../controllers/testController");
const router = (0, express_1.Router)();
exports.router1 = router;
router.route('/home').post(testController_1.testController.test1);
//# sourceMappingURL=routes.js.map