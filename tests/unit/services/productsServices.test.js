const { expect } = require('chai');
const sinon = require('sinon');
const { findAll, findById, createProduct } = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');

const { products, newProduct, newProductInsert } = require('../../mocks/product.mock');

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

  afterEach(sinon.restore);
  
  describe('Criação de produtos', () => {
    it('Criação de um produto', async () => {
      sinon.stub(productsModel, 'insertProduct').resolves(newProduct);
      sinon.stub(productsModel, 'findById').resolves(newProductInsert[0]);

      const result = await createProduct(newProduct);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(newProductInsert[0]);
    });
  });
});