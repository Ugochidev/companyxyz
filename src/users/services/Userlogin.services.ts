import UserRepository from "../models/user.repository";
import AppError from "../../shared/utils/AppError";
import Bcrypt from "../../shared/services/Bcrypt";
import Jwt from "../../shared/services/JWT";
import ICreateSessionDTO from "../dtos/ICreateSessionDTO";

class LoginUserService {
  private userRepository: UserRepository;
  private bcrypt: Bcrypt;
  private jwt: Jwt;

  constructor() {
    this.userRepository = new UserRepository();
    this.bcrypt = new Bcrypt();
    this.jwt = new Jwt();
  }

  async execute({
    email,
    password,

  }:
  {
    email: string;
    password: string;
  }): Promise<ICreateSessionDTO> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect Login Credentials", 404);
    }

    const passwordMatch = await this.bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Incorrect Login Credentials", 401);
    }


    const access_token = await this.jwt.generateAccessToken({
      _id: user._id,
    });
    return { access_token };
  }
}

export default LoginUserService;
