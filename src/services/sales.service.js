const model = require('../models');

const { salesModel } = model;

const findAll = async () => {
  const sales = await salesModel.findAll();
  if (sales) return { type: null, message: sales };
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: sale };
};

const deleteById = async (id) => {
  const sale = await salesModel.findById(id);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  salesModel.deleteById(id);
  return { type: null };
};

module.exports = {
  findAll,
  findById,
  deleteById,
};
