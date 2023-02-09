import UserRepository from "../models/user.repository";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import AppError from "../../shared/utils/AppError";
import Bcrypt from "../../shared/services/Bcrypt";


class RegisterUserService {
  private userRepository: UserRepository;
  private bcrypt: Bcrypt;
  constructor() {
    this.userRepository = new UserRepository();
    this.bcrypt = new Bcrypt();
  }
  async execute({
   _id,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<object> {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError(`${email} already exists...`);
    }

    const hashedPassword = await this.bcrypt.hash(password);

    const newUser = await this.userRepository.create({
      _id,
      name,
      password: hashedPassword,
      email,
    });


    return { userId: newUser._id, name: newUser.name, email: newUser.email };
  }
}
export default RegisterUserService;
