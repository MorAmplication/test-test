import { JsonValue } from "type-fest";

export type User = {
  username: string;
  roles: JsonValue;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
};
