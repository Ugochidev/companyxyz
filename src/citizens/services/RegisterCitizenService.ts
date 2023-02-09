import CitizenRepository from "../models/citizen.repository";
import ICitizenDTO from "../dtos/ICitizenDTO";
import AppError from "../../shared/utils/AppError";


class RegisterCitizenService {
  private citizenRepository: CitizenRepository;
  constructor() {
    this.citizenRepository = new CitizenRepository();
  }
  async execute({
    _id,
    fullName,
    gender,
    address,
    phone,
    wardId,
  }: ICitizenDTO): Promise<object> {
    const newCitizen = await this.citizenRepository.create({
      _id,
      fullName,
      gender,
      address,
      phone,
      wardId,
    });

    return { newCitizen };
  }
}
export default RegisterCitizenService;
