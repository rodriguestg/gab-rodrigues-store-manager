const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date , product_id, quantity
    FROM StoreManager.sales_products, StoreManager.sales
    GROUP BY sale_id, product_id, date, quantity`,
  );
  return camelize(result);
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id, quantity FROM  StoreManager.sales JOIN StoreManager.sales_products
    WHERE sale_id = ?
    GROUP BY sale_id, product_id, date, quantity
    ORDER BY sale_id, product_id;`,
    [saleId],
  );
  return camelize(sale);
};

const deleteById = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
};

module.exports = {
  findAll,
  findById,
  deleteById,
};
