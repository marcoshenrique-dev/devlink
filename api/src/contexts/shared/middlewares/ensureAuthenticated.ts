import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken';

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).json({
      message: 'Token is missing'
    });
  }

  // Bearer 124124213e3eadasf31r3

  const [, token] = authToken.split(" ");

  try {
    verify(token, "11c1c24a-2554-48a2-b6d2-f5586ef20c05");

    return next();
  }
  catch (err){
    return response.status(401).json({
      message: 'Token invalid'
    });
  }
}
