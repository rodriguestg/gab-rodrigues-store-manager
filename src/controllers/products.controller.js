const services = require('../services');
const errorMap = require('../utils/errorMap');

const { productsService } = services;

const listProduct = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

// const createTravel = async (req, res) => {
//   const { passengerId } = req.params;
//   const { startingAddress, endingAddress, waypoints } = req.body;

//   const { type, message } = await productsService.requestTravel(
//     passengerId,
//     startingAddress,
//     endingAddress,
//     waypoints,
//   );

//   if (type) return res.status(errorMap.mapError(type)).json({ message });

//   res.status(201).json(message);
// };

// const createProduct = async (req, res) => {
//   const { name, email, phone } = req.body;
  
//   const { type, message } = await productsService.createPassenger(name, email, phone);

//   if (type) return res.status(errorMap.mapError(type)).json(message);

//   res.status(201).json(message);
// };

module.exports = {
  // createTravel,
  listProduct,
  getProduct,
  // createProduct,
};
