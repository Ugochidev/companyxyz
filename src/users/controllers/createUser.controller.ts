import { Request, Response, NextFunction } from "express";
import RegisterUserService from "../services/RegisterUserService";

class CreateUser {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const {
        name,
        password,
        email,
      } = req.body;
      console.log(req.body);

      const registerUserService = new RegisterUserService();

      const createUser = await registerUserService.execute({
        name,
        password,
        email,
      });

      return res.status(201).json({
        success: true,
        message: "User Successfully Created.",
        createUser,
      });
    } catch (error: any) {
      // next(error)
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default CreateUser;
