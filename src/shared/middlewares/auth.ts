import { Request, Response, NextFunction } from "express";
import JwtClient from "../../shared/services/JWT";
import AppError from "../../shared/utils/AppError";

const auth = (request: Request, response: Response, next: NextFunction) => {
  let token = request.headers["authorization"];

  if (!token) {
    throw new AppError("No token provided", 401);
  }

  token = token.replace("Bearer ", "");

  const { _id } = new JwtClient().verifyAccessToken(token);
  console.log(_id);
  
    // const decodedToken = new JwtClient().verifyAccessToken(token);
    // console.log(decodedToken);
  // We should add a find user user that searches the decoded id user from our database to mke sure it has not been altered!
  request.user = _id;
  // request.user = decodedToken._id
  
  
  return next();
};

export default auth;
