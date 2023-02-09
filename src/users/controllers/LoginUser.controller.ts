import { Request, response, Response } from "express";
import LoginUserService from "../services/Userlogin.services";

class Login {
  async session(req: Request, res: Response): Promise<Response> {
    try {
      const {
        email,
        password,
      } = req.body;
      const loginUserService = new LoginUserService();
      const response = await loginUserService.execute({
        email,
        password,
      });
      return res.status(200).json({
        success: true,
        message: 'login successful',
        token: response.access_token,
      });
    } catch (error: any) {
      console.log(error);

      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default Login;
