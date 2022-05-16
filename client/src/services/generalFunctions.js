export const arrayToString = (arr, field) => {
  let stringOfField = arr.map((single) => `${single[field]}`).join(", ");
  return stringOfField;
};
