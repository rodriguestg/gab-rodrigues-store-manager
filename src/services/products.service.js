const model = require('../models');
const { validateNewProduct } = require('./validations/validationNameProduct');
const { validateUpdateProduct } = require('./validations/validateUpdateProduct');

const { productsModel } = model;

const PRODUCT_NOT_FOUND = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

const findAll = async () => {
  const products = await productsModel.findAll();
  if (products) return { type: null, message: products };
  return PRODUCT_NOT_FOUND;
};

const findById = async (productId) => {
  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return PRODUCT_NOT_FOUND;
};

const createProduct = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return { type: error.type, message: error.message };

  const newProduct = await productsModel.insertProduct(name);
  const product = await productsModel.findById(newProduct);
  if (product) return { type: null, message: product };
  return PRODUCT_NOT_FOUND;
};

const searchProduct = async (term) => { 
  if (!term) {
  const productsAll = await productsModel.findAll();
    return { type: null, message: productsAll };
  }
  const product = await productsModel.searchProduct(term);
  return { type: null, message: product };
 };

const deleteById = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return PRODUCT_NOT_FOUND;
  productsModel.deleteById(id);
  return { type: null };
};

const updateProduct = async ({ id, name }) => {
  const error = validateUpdateProduct({ name });
  if (error.type) return { type: error.type, message: error.message };
  await productsModel.updateProduct({ id, name });
  const upProduct = await productsModel.findById(id);
  if (!upProduct) return PRODUCT_NOT_FOUND;
  return { type: null, message: upProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  searchProduct,
  deleteById,
  updateProduct,
};
