import LgaRepository from "../models/Lga.repository";
import ILgaDTO from "../dtos/ILgaDTO";
import AppError from "../../shared/utils/AppError";



class RegisterLgaService {
  private lgaRepository: LgaRepository;
  constructor() {
    this.lgaRepository = new LgaRepository();
  }
  async execute({ _id, name, stateId }: ILgaDTO): Promise<object> {

    const newLga = await this.lgaRepository.create({
      _id,
      name,
      stateId,
    });

    return { lgaId: newLga._id, name: newLga.name, stateId: newLga.stateId };
  }
}
export default RegisterLgaService;
