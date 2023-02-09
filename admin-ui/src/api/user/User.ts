import { JsonValue } from "type-fest";
import { Pruduct } from "../pruduct/Pruduct";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  pruducts?: Pruduct | null;
};
