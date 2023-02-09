import { Citizen } from "./citizen.model";
import ICitizenModel from "./citizen.model";
import ICitizen from "../dtos/ICitizenDTO";

class CitizenRepository {
  private citizen;
  constructor() {
    this.citizen = Citizen;
  }

  async create(data: ICitizen): Promise<ICitizenModel> {
    const citizen = await this.citizen.create(data);
    return citizen;
  }

}

export default CitizenRepository;
