import { InputJsonValue } from "../../types";
import { PruductWhereUniqueInput } from "../pruduct/PruductWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  pruducts?: PruductWhereUniqueInput | null;
};
