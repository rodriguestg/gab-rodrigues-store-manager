const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get(
  '/',
  productsController.listProduct,
);

router.get(
  '/search',
  productsController.searchProduct,
);

router.get(
  '/:id',
  productsController.getProduct,
);

router.post(
  '/',
  productsController.insertProduct,
);

router.delete(
  '/:id',
  productsController.deleteProduct,
);

module.exports = router;
