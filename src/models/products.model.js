const camelize = require('camelize');
const snakeize = require('snakeize');
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

const insertProduct = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const searchProduct = async (term) => { 
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products
    WHERE NAME LIKE '${term}%'`,
    [term],
  );
  return camelize(result);
 };

module.exports = {
  findAll,
  findById,
  insertProduct,
  searchProduct,
};
