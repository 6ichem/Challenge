import { centToDollars } from "../../utils/centToDollars";
import { relativeTime } from "../../utils/relativeTime";

export const useGridItem = ({ item }) => {
  // Destructuring
  const { id, size, price, date, face } = item;
  // Making new constants for reading the code better
  const dollars = centToDollars(price);

  const formattedDate = relativeTime(date);

  return { models: { id, size, dollars, formattedDate, face }, operators: {} };
};
