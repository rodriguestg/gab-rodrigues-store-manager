const services = require('../services');
const errorMap = require('../utils/errorMap');

const { productsService } = services;

const listProduct = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct({ name });

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const searchProduct = async (req, res) => {
  const { q: searchTerm } = req.query;
  const { message } = await productsService.searchProduct(searchTerm);
  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).end();
};

module.exports = {
  listProduct,
  getProduct,
  insertProduct,
  searchProduct,
  deleteProduct,
};
