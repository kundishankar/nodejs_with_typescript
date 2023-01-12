"use strict";
import jwt from 'jsonwebtoken';

export const generateToken = (payload:any, signInOptions: any) => {
    try {
        return jwt.sign(payload, process.env.RANDOM_TOKEN_SECRET, signInOptions);
      } catch (error) {
        return error;
      }
}