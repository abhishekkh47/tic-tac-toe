import mongoose from "mongoose";
import { IUser, MongooseModel } from "../types";

export type IUserSchema = MongooseModel<IUser> & mongoose.Document;

const schema = new mongoose.Schema<IUserSchema>({
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  firstName: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
});

export const UserTable = mongoose.model<IUserSchema>("user", schema);
