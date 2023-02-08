import { PruductWhereInput } from "./PruductWhereInput";
import { PruductOrderByInput } from "./PruductOrderByInput";

export type PruductFindManyArgs = {
  where?: PruductWhereInput;
  orderBy?: Array<PruductOrderByInput>;
  skip?: number;
  take?: number;
};
