import { InputJsonValue } from "../../types";
import { PruductWhereUniqueInput } from "../pruduct/PruductWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  pruducts?: PruductWhereUniqueInput | null;
};
