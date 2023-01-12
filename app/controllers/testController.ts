import { middleware } from "../middlewares";

class TestController {
    test1 = async (req : any, res: any) => {
        //console.log(req.body.name)
        //console.log(middleware.getPublicKey());
        res.send("Hello world welcome!!");
    }
}

export const testController:any = new TestController();