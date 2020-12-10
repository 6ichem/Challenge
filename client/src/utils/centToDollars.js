export const centToDollars = (cents) => {
  // Using toLocaleString to convert currentcy
  const dollars = (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollars;
};
