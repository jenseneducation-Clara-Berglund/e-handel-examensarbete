const low = require("lowdb");
const md5 = require('md5');
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  users: [],
  sessions: [],
  products: [
    {
      id: 1,
      name: "shirt",
      price: "700sek",
      imgURL:
        "https://cdn.pixabay.com/photo/2015/09/02/13/18/person-918986__480.jpg"
    },
    {
      id: 2,
      name: "pants",
      price: "500sek",
      imgURL:
        "https://cdn.pixabay.com/photo/2020/01/22/15/10/fashion-4785524__480.jpg"
    }

  ],
}).write();

db._.mixin({
  pushUnique: function (array, key, newEl) {
    if (array.findIndex((el) => el[key] === newEl[key]) === -1) {
      array.push(newEl);
    } else {
      throw key + ' existerar redan'
    }
    return array;
  }
});

const encryptPassword = (readablePassword) => {
  return md5(readablePassword)
}

const createRandomSessionToken = () => {
  return Math.random().toString(36);
}

module.exports = {
  createUser: (fullName, email, password) => {
    db.get('users')
      .pushUnique('email', { fullName, email, password: encryptPassword(password) })
      .write()
    return db.get('users').find({ email: email })
  },
  login: (email, password) => {
    let user = db.get('users')
      .find({ email: email, password: encryptPassword(password) })
      .value()
    console.log(user)
    if (user !== null) {
      // credentials OK. user allowed. Create session object
      let expire_time = new Date().getTime() + 4 * 24 * 60 * 60
      let sessionObject = { user: email, token: createRandomSessionToken(), expire_time: expire_time }
      db.get("sessions")
        .push(sessionObject)
        .write()
      return sessionObject
    } else {
      // credentials not OK. 
      throw "invalid email or password"
    }
  },
  checkSession: (token) => {
    let currentTime = new Date().getTime()
    return db.get("sessions")
      .filter(session => {
        return session.expire_time > currentTime
      })
      .find({ "token": token })
      .value()
  },


  getAllProducts: () => {
    const products = db.get("products").value();
    return products;
  },

  getProductById: id => {
    const product = db
      .get("products")
      .find({ id: id })
      .value();
    return product;
  },

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
