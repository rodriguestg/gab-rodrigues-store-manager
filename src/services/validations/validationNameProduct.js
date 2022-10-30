const { addProductSchema } = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = addProductSchema
    .validate(name);
  const typeError = () => {
    if (error.message === '"name" is required') return 'NAME_IS_REQUIRED';
    return 'NAME_5_CHARACTERS';
  };
  if (error) return { type: typeError(), message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};
