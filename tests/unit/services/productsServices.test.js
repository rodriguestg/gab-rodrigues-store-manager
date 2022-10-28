const { expect } = require('chai');
const sinon = require('sinon');
const { findAll, findById } = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');

const { products } = require('../../mocks/product.mock');

describe('Verificando service produtos', () => {
  describe('listagem de produtos', () => {
    it('retorna a lista completa de produtos', async () => {
      sinon.stub(productsModel, 'findAll').resolves(products);

      const result = await findAll();

      expect(result.message).to.deep.equal(products);
    });
    it('retorna um produto a partir do id', async () => {
      sinon.stub(productsModel, 'findById').resolves(products[0]);

      const result = await findById(1);

      expect(result.message).to.deep.equal(products[0]);
    });
  });
});