import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
};
