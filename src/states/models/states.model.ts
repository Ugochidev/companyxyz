import { Document, Schema, model } from "mongoose";
import IState from "../dtos/IStateDTO";

const StateSchema: Schema = new Schema<IState>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default interface IStateModel extends IState {}

export const State = model<IStateModel>("State", StateSchema);
