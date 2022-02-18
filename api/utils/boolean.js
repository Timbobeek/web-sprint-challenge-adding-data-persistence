const isValidBoolean = (value) => {
  return value === "true" || value === "false" || typeof value === "number";
};

const convertToBoolean = (value) => {
  return Boolean(typeof value === "number" ? value : value === "true");
};

module.exports = {
  isValidBoolean,
  convertToBoolean,
};
