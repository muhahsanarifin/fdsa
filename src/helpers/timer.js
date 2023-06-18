import { DateTime } from "luxon";

export const date = (date) => {
  return DateTime.fromMillis(date).toFormat("DDDD");
};
