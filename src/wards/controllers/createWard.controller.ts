import { Request, Response, NextFunction } from "express";
import RegisterWardService from "../services/RegisterWardService";

class CreateWard {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { name, lgaId} = req.body;
      console.log(req.body);

      const registerWardService = new RegisterWardService();

      const createWard = await registerWardService.execute({
        name,
        lgaId
      });

      return res.status(201).json({
        success: true,
        message: "Ward Successfully Created.",
        createWard,
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

export default CreateWard;
