// You can see this function from stackoverflow
export const convertDateToDDMMYYYY = (inputFormat) => {
  // if second is <10 then we need to add 0 in it
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  // get new date
  let d = new Date(inputFormat);
  // put them into an array and join it with /
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
};

export const relativeTime = (date) => {
  // declaration
  const prevDate = new Date(date).getTime();
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;

  // if prevTime is higher than 7 days ago
  if (diff < month && diff / day > 7) {
    return convertDateToDDMMYYYY(prevDate);
  }
  // Formatted to hours and days ago
  switch (true) {
    case diff < day:
      return Math.round(diff / hour) + " hours ago";
    case diff < month:
      return Math.round(diff / day) + " days ago";

    default:
      return "";
  }
};
