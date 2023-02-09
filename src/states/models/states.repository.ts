import { State } from "../models/states.model";
import IStateModel from "../models/states.model";
import IState from "../dtos/IStateDTO";

class StateRepository {
  private state;
  constructor() {
    this.state = State;
  }

  async create(data: IState): Promise<IStateModel> {
    const state = await this.state.create(data);
    return state;
  }

  async findById(id: string): Promise<IStateModel | null> {
    const state = await this.state.findById(id);

    return state;
  }

  async update(id: string, data: object): Promise<IStateModel | null> {
    const state = await this.state.findByIdAndUpdate(id, data, { new: true });
    return state;
  }

  async deleteById(id: string): Promise<IStateModel | null> {
    const state = await this.state.findByIdAndDelete(id);
    return state;
  }
}

export default StateRepository;
