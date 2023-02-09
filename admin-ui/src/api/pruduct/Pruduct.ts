import { User } from "../user/User";

export type Pruduct = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  test?: User | null;
};
