import { middleware } from "../middlewares";
import { generateToken } from "../utils";

class AuthController {

    generateToken = async (req : any, res: any) => {
        //console.log(req.body.name)
        //console.log(middleware.generateToken);
        res.status(200).json({stutus:200, token: middleware.generateToken});
    }

    login = async (req : any, res: any) => {
        //console.log(req.body.name)
        //console.log(middleware.generateToken);
        const payload: any = {
            name: req.body.name,
            userId: req.body.userId,
            accessTypes: [
              'getTeams',
              'addTeams',
              'updateTeams',
              'deleteTeams'
            ]
          };
  
          const signInOptions: any = {
            //algorithm: 'RS256',
            expiresIn: '1m'
          };
        res.status(200).json({stutus:200, token: generateToken(payload, signInOptions)});
    }
}

export const authController:any = new AuthController();