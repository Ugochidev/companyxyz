// import { Request, Response, NextFunction } from "express";
// import UserRepository from "../../modules/users/models/repositories/UserRepository";
// import AppError from "../utils/AppError";

// const userRepository = new UserRepository();

// export default async (
//   request: Request,
//   response: Response,
//   next: NextFunction
// ) => {
//   const user = await userRepository.findById(request.user);

//   if (user?.role != "ADMIN" && user?.role != "SUPER STAFF") {
//     throw new AppError(
//       "Only an Admin or Super Staff can perform this action",
//       403
//     );
//   }
//   next();
// };
