import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
};
