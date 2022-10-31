const model = require('../models');

const { salesModel } = model;

const findAll = async () => {
  const products = await salesModel.findAll();
  if (products) return { type: null, message: products };
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

const findById = async (saleId) => {
  const product = await salesModel.findById(saleId);
  if (product.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
};
