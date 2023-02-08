import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PruductWhereInput = {
  id?: StringFilter;
  test?: UserWhereUniqueInput;
};
