import { Request, Response, NextFunction } from "express";
import RegisterCitizenService from "../services/RegisterCitizenService";

class CreateCitizen {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { _id, fullName, gender, address, phone, wardId } = req.body;
      console.log(req.body);

      const registerCitizenService = new RegisterCitizenService();

      const createCitizen = await registerCitizenService.execute({
        _id,
        fullName,
        gender,
        address,
        phone,
        wardId,
      });

      return res.status(201).json({
        success: true,
        message: "Citizen Successfully Created.",
        createCitizen,
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

export default CreateCitizen;
