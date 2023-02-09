import { Document, Schema, model } from "mongoose";
import IWard from "../dtos/IWardDTO";

const WardSchema: Schema = new Schema<IWard>(
  {
    lgaId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Lga",
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
export default interface IWardModel extends IWard {}

export const Ward = model<IWardModel>("Ward", WardSchema);
