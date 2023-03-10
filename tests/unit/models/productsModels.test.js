const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products, newProductInsert, newProduct } = require('../../mocks/product.mock');

describe('Testes de unidade do model da listagem de produtos', function () {
  afterEach(sinon.restore);

  it('Recuperando a lista de produtos', async () => {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto usando id', async () => {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it('Criação de um novo produto, inserindo id', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const result = await productsModel.insertProduct(newProduct);
    expect(result).to.be.deep.equal(newProductInsert[0].id);
  });
});
