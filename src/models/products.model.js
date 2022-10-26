const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const findById = async (productsId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productsId],
  );
  return camelize(products);
};

module.exports = {
  findAll,
  findById,
};
