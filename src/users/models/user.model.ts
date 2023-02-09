import { Document, Schema, model } from "mongoose";
import IUser from '../dtos/IUserDTO';

const UserSchema: Schema = new Schema<IUser>(
  {
    _id: {
      type: String,
      required: true,
    },
   name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default interface IUserModel extends IUser{}

export const User = model<IUserModel>("User", UserSchema);
