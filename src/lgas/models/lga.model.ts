import { Document, Schema, model } from "mongoose";
import ILga from '../dtos/ILgaDTO';

const LgaSchema: Schema = new Schema<ILga>(
  {
    stateId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "State",
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default interface ILgaModel extends ILga {}

export const Lga = model<ILgaModel>("Lga", LgaSchema);
