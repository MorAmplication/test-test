import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  username: string;
  password: string;
  roles: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
};
