const trueStrings = ["true", "1"];
const falseStrings = ["false", "0"];
const boolStrings = [...trueStrings, ...falseStrings];

const isValidBoolean = (value) => {
  return (
    typeof value === "boolean" ||
    typeof value === "number" ||
    (value !== undefined && boolStrings.includes(value.toLowerCase()))
  );
};

const convertToBoolean = (value) => {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return Boolean(value);
  }

  if (typeof value === "string" && trueStrings.includes(value.toLowerCase())) {
    return true;
  }

  return false;
};

module.exports = {
  isValidBoolean,
  convertToBoolean,
};
