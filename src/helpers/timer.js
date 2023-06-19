import { DateTime } from "luxon";

export const date = (date) => {
  return DateTime.fromMillis(date).toFormat("DDDD");
};

export const convertDate = (date) => {
  return DateTime.fromMillis(date).toFormat("yyyy-MM-dd");
}
