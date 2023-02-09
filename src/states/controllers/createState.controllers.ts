import { Request, Response, NextFunction } from "express";
import RegisterStateService from "../services/CreateState.services";

class CreateState {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { name } = req.body;

      const registerStateService = new RegisterStateService();

      const createState = await registerStateService.execute({
        name,
      });

      return res.status(201).json({
        success: true,
        message: " Successfully Created.",
        createState,
      });
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default CreateState;
