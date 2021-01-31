import format from "date-fns/format";
const date_iso = "dd-mm-yyyy";
export const toISODate = (d) => format(Date.parse(d), date_iso);
