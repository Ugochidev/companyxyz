import { Ward } from "./ward.model";
import IWardModel from "./ward.model";
import IWard from "../dtos/IWardDTO";

class WardRepository {
  private ward;
  constructor() {
    this.ward = Ward;
  }

  async create(data: IWard): Promise<IWardModel> {
    const ward = await this.ward.create(data);
    return ward;
  }

  async findById(id: string): Promise<IWardModel | null> {
    const ward = await this.ward.findById(id);

    return ward;
  }
}

export default WardRepository;
