import WardRepository from "../models/ward.repository";
import IWardDTO from "../dtos/IWardDTO";
import AppError from "../../shared/utils/AppError";


class RegisterWardService {
  private wardRepository: WardRepository;
  constructor() {
    this.wardRepository = new WardRepository();
  }
  async execute({ _id, name, lgaId }: IWardDTO): Promise<object> {
    const newWard = await this.wardRepository.create({
      _id,
      name,
      lgaId,
    });

    return { wardId: newWard._id, name: newWard.name, lgaId: newWard.lgaId };
  }
}
export default RegisterWardService;
