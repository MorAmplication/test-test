import { Pruduct as TPruduct } from "../api/pruduct/Pruduct";

export const PRUDUCT_TITLE_FIELD = "id";

export const PruductTitle = (record: TPruduct): string => {
  return record.id || String(record.id);
};
