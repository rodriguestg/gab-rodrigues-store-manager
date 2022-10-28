const model = require('../models');

const { productsModel } = model;

const findAll = async () => {
  const products = await productsModel.findAll();
  if (products) return { type: null, message: products };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const findById = async (productId) => {
  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (name) => {
  const newProduct = await productsModel.insertProduct(name);
  const product = await productsModel.findById(newProduct);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};
