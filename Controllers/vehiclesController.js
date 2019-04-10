let vehicles = require("../vehicles");

const list = () => {
  return vehicles;
};

const show = id => {
  return vehicles.find(c => c._id == id);
};

const create = newVehicle => {
  vehicles.push(newVehicle);
  return vehicles;
};

module.exports = {
  list,
  show,
  create
};
