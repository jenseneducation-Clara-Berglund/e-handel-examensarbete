const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  users: []
}).write();

module.exports = {
  createUser: (fullName, email, password) => {
    db.get('users')
      .push({ fullName, email, password })
      .write()
    return db.get('users').find({ email: email })
    //     .value();
  }
  // getAllProducts: () => {
  //   const products = db.get("products").value();
  //   return products;
  // },

  // getProductById: id => {
  //   const product = db
  //     .get("products")
  //     .find({ id: id })
  //     .value();
  //   return product;
  // },

  // // retrieves the right cart
  // getCartById: id => {
  //   const cart = db
  //     .get("shoppingCarts")
  //     .find({ id: id })
  //     .value();
  //   return cart;
  // },

  // updateCartWithProducts: (id, products) => {
  //   db.get("shoppingCarts")
  //     .find({ id: id })
  //     .assign({ products: products })
  //     .write();
  // }
};
