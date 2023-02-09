import StateRepository from "../models/states.repository";
import IStateDTO from "../dtos/IStateDTO";
import AppError from "../../shared/utils/AppError";

class RegisterStateService {
  private stateRepository: StateRepository;
  constructor() {
    this.stateRepository = new StateRepository();
  }
  async execute({ _id, name }: IStateDTO): Promise<object> {


    const newState = await this.stateRepository.create({
      _id,
      name,
    });

    return {
      stateId: newState._id,
      stateName: newState.name,
    };
  }
}
export default RegisterStateService;
