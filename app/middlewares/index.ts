"use strict";
import jwt from 'jsonwebtoken';
import path from 'path';
var fs = require('fs');

class Middleware {
    getPublicKey = () => {
        const fileName = 'dev_public_key.pem';
        const filePath = path.join(__dirname, '..', '..') + '/app/src/keys/' + fileName;
        //console.log(filePath);
        const publicKey = fs.readFileSync(filePath, 'utf8');
        const payload: any = {
            name: 'Shankar Kundi',
            userId: 123,
            accessTypes: [
              'getTeams',
              'addTeams',
              'updateTeams',
              'deleteTeams'
            ]
          };

          const signInOptions: any = {
            //algorithm: 'RS256',
            expiresIn: '1h'
          };

        //var token: any = jwt.sign(payload, publicKey, signInOptions);
        var token: any = jwt.sign(payload, process.env.RANDOM_TOKEN_SECRET, signInOptions);
        //var decoded: any = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        //console.log(decoded.foo)
        //console.log(publicKey);
        return token;
    }

    generateToken = (payload: any, signInOptions: any) => {
      try {
        return jwt.sign(payload, process.env.RANDOM_TOKEN_SECRET, signInOptions);
      } catch (error) {
        return error;
      }
  }

    auth = async (req: any, res: any, next: any) => {
      try {
        const token: any = req.headers.authorization.split(" ")[1];
        const decodedToken: any = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        console.log(decodedToken.iat);
        const userId: any = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
          res.status(401).json({ status:401, message: 'Invalid Token' });
          return;
        } else {
          next();
        }
      } catch (error) {
        res.status(401).json({ status:401, message: 'Token Not available!!' });
        return;
      }
    }
}

export const middleware = new Middleware();