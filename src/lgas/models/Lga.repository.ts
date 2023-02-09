import { Lga } from "./lga.model";
import ILgaModel from "./lga.model";
import ILga from "../dtos/ILgaDTO";

class LgaRepository {
  private lga;
  constructor() {
    this.lga = Lga;
  }

  async create(data: ILga): Promise<ILgaModel> {
    const lga = await this.lga.create(data);
    return lga;
  }

  async findById(id: string): Promise<ILgaModel | null> {
    const lga = await this.lga.findById(id);

    return lga;
  }
}

export default LgaRepository;
