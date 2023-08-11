export const getSpanishDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = ("0" + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
};

export const formatYearsMonthDay = (date) => {
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};

export const FormatedTimeTo12 = (dt) => {
  let hours = dt.getHours();
  const minutes = dt.getMinutes();
  const AmOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${AmOrPm}`;
};
