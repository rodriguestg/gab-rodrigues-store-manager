const model = require('../models');
const { validateNewProduct } = require('./validations/validationNameProduct');

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
  const error = validateNewProduct(name);
  if (error.type) return { type: error.type, message: error.message };

  const newProduct = await productsModel.insertProduct(name);
  const product = await productsModel.findById(newProduct);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const searchProduct = async (term) => { 
  if (!term) {
  const productsAll = await productsModel.findAll();
    return { type: null, message: productsAll };
  }
  const product = await productsModel.searchProduct(term);
  return { type: null, message: product };
 };

module.exports = {
  findAll,
  findById,
  createProduct,
  searchProduct,
};
