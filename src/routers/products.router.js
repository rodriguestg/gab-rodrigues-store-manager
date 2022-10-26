const express = require('express');
const productsController = require('../controllers/products.controller');

// const validateNewPassengerFields = require('../middlewares/validateNewPassengerFields');
// const validateRequestTravelSchema = require('../middlewares/validatePassengerFields');

const router = express.Router();

// router.post(
//   '/:passengerId/request/travel',
//   validateRequestTravelSchema,
//   productsController.createTravel,
// );

router.get(
  '/',
  productsController.listProduct,
);

router.get(
  '/:id',
  productsController.getProduct,
);

// router.post(
//   '/',
//   validateNewPassengerFields,
//   productsController.createPassenger,
// );

module.exports = router;
