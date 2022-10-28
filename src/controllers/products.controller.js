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

module.exports = {
  listProduct,
  getProduct,
};
