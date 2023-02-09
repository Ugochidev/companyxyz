import { Request, Response, NextFunction } from "express";
import RegisterLgaService from "../services/RegisterLgaService";

class CreateLga {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const {
        name,
       stateId
      } = req.body;
      console.log(req.body);

      const registerLgaService = new RegisterLgaService();

      const createLga = await registerLgaService.execute({
        name,
        stateId
      });

      return res.status(201).json({
        success: true,
        message: "User Successfully Created.",
        createLga,
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

export default CreateLga;
