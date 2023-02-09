import { Document, Schema, model } from "mongoose";
import ICitizen from "../dtos/ICitizenDTO";

const CitizenSchema: Schema = new Schema<ICitizen>(
  {
    wardId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Ward",
    },
  
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },

    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default interface ICitizenModel extends ICitizen {}

export const Citizen = model<ICitizenModel>("Citizen", CitizenSchema);
