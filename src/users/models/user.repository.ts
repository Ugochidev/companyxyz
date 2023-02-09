import { User } from "../models/user.model";
import IUserModel from "../models/user.model";
import IUser from "../dtos/IUserDTO";

class UserRepository {
  private user;
  constructor() {
    this.user = User;
  }

  async create(data: IUser): Promise<IUserModel> {
    const user = await this.user.create(data);
    return user;
  }


  async findByEmail(email: string): Promise<IUserModel | null> {
    const user = await this.user.findOne({ email });
    console.log("This is coming from the repositories", user);
    return user;
  }


  async findById(id: string): Promise<IUserModel | null> {
    const user = await this.user.findById(id);
    console.log(767, user);

    return user;
  }

  async update(id: string, data: object): Promise<IUserModel | null> {
    const user = await this.user.findByIdAndUpdate(id, data, { new: true });
    return user;
  }

  async deleteById(id: string): Promise<IUserModel | null> {
    const user = await this.user.findByIdAndDelete(id);
    return user;
  }

  async deleteByPhoneNumber(phone_number: string): Promise<IUserModel | null> {
    const user = await this.user.findOneAndDelete({ phone_number });
    return user;
  }
}

export default UserRepository;
