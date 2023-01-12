import {Router} from 'express';
import { testController } from '../controllers/testController';
import { authController } from '../controllers/authController';
import { middleware } from '../middlewares';

const router: Router = Router();

router.route('/home').post(middleware.auth, testController.test1);
router.route('/generate-token').post(authController.generateToken);
router.route('/login').post(authController.login);
// router.route('/home').post((req, res) => {
//     res.send("Hello welcome!!");
// });

export {router as router1}