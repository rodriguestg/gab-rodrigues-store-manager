const products = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
];

const newProduct = {
    name: "Roupa Homem de Ferro"
}
  
const newProductInsert = [
  {
    id: 4,
    ...newProduct,
  }
]

module.exports = {
  products,
  newProduct,
  newProductInsert,
};
