const { v4: uuidv4 } = require("uuid");
const low = require("lowdb");
const md5 = require("md5");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({
  users: [],
  sessions: [],
  carts: [],
  orders: [],
  products: [
    {
      id: 1,
      name: "yellowbag",
      price: "700",
      imgURL:
        "https://media.istockphoto.com/photos/yellow-handbag-picture-id1154597724?k=20&m=1154597724&s=612x612&w=0&h=TDkUQF3IGOcHsCVfjqwd27nvFzm4jkBYP0oGvxvgSt0=",
    },
    {
      id: 2,
      name: "greenbag",
      price: "1100",
      imgURL:
        "https://media.istockphoto.com/photos/woman-bag-isolated-on-the-white-background-picture-id92272987?k=20&m=92272987&s=612x612&w=0&h=OxcFi4rxBY9O4J2qfqe9_kgjW_IMWcoejsd6fKfvZfs=",
    },
    {
      id: 3,
      name: "pinkbag",
      price: "900",
      imgURL:
        "https://media.istockphoto.com/photos/pink-women-bag-isolated-picture-id916257096?k=20&m=916257096&s=612x612&w=0&h=rG9oYQcuXqzABq2lAi8vEpjnnqkzFQvzm6FoNchOwzg=",
    },
    {
      id: 4,
      name: "bluebag",
      price: "500",
      imgURL:
        "https://media.istockphoto.com/photos/handbag-stock-photo-picture-id841722612?k=20&m=841722612&s=612x612&w=0&h=pj6swBL3sRCpj_Ihiv5QTLFl9afO0e3gdg4bsYobYQs=",
    },
    {
      id: 5,
      name: "nudebag",
      price: "1700",
      imgURL:
        "https://media.istockphoto.com/photos/lexury-bag-picture-id907850654?k=20&m=907850654&s=612x612&w=0&h=76NH-lEldxPF4MqI8E5kL0CtFqNOsYw2bvbEU1KVx2w=",
    },
    {
      id: 6,
      name: "blackbag",
      price: "1500",
      imgURL:
        "https://media.istockphoto.com/photos/black-leather-womens-tote-handbag-on-white-background-picture-id502935014?k=20&m=502935014&s=612x612&w=0&h=qgK79BRFuyk2e7Ba5nrx6PSUDhF4zU2Cg249vLTIgPU=",
    },
    {
      id: 7,
      name: "orangebag",
      price: "600",
      imgURL:
        "https://media.istockphoto.com/photos/orange-handbag-picture-id618731934?k=20&m=618731934&s=612x612&w=0&h=VAa8nqHSkl-aDgD_8Gpi_mGPlcRTe71VLwZ8uanAzi0=",
    },
    {
      id: 8,
      name: "purplebag",
      price: "500",
      imgURL:
        "https://media.istockphoto.com/photos/feminine-purple-leather-handbag-picture-id153052263?k=20&m=153052263&s=612x612&w=0&h=pktEynhYl8fi6QluO0cdqx7q6HEoL6d8dt3ghpNQ_Ac=",
    },
  ],
}).write();

db._.mixin({
  pushUnique: function (array, key, newEl) {
    if (array.findIndex((el) => el[key] === newEl[key]) === -1) {
      array.push(newEl);
    } else {
      throw key + " existerar redan";
    }
    return array;
  },
});

const encryptPassword = (readablePassword) => {
  return md5(readablePassword);
};

const createRandomSessionToken = () => {
  return Math.random().toString(36);
};

module.exports = {
  createUser: (fullName, email, password) => {
    db.get("users")
      .pushUnique("email", {
        fullName,
        email,
        password: encryptPassword(password),
      })
      .write();
    return db.get("users").find({ email: email });
  },

  getOrCreateCartForUser: (email) => {
    let cart = db.get("carts").find({ userId: email }).value();
    if (cart == null) {
      db.get("carts")
        .push({
          userId: email,
          products: [],
        })
        .write();
    }
    return db.get("carts").find({ userId: email });
  },

  addProductToCart: (email, productId) => {
    let cart = db.get("carts").find({ userId: email });
    var cartProducts = cart.value().products;
    const product = db.get("products").find({ id: productId }).value();
    console.log(product, productId, email);

    let randomId = uuidv4();

    cartProducts.push({ ...product, cartProductId: randomId });
    cart.assign({ products: cartProducts }).write();
    return cart;
  },

  removeProductFromCart: (email, cartProductId) => {
    let cart = db.get("carts").find({ userId: email });
    var cartProducts = cart
      .value()
      .products.filter((p) => p.cartProductId !== cartProductId);
    cart.assign({ products: cartProducts }).write();
    return cart;
  },

  login: (email, password) => {
    let user = db
      .get("users")
      .find({ email: email, password: encryptPassword(password) })
      .value();
    console.log(user);
    if (user !== null) {
      // credentials OK. user allowed. Create session object
      let expire_time = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
      let sessionObject = {
        user: email,
        token: createRandomSessionToken(),
        expire_time: expire_time,
      };
      db.get("sessions").push(sessionObject).write();
      return sessionObject;
    } else {
      // credentials not OK.
      throw "invalid email or password";
    }
  },
  checkSession: (token) => {
    let currentTime = new Date().getTime();
    return db
      .get("sessions")
      .filter((session) => {
        return session.expire_time > currentTime;
      })
      .find({ token: token })
      .value();
  },

  getAllProducts: () => {
    const products = db.get("products").value();
    return products;
  },

  getProductById: (id) => {
    const product = db.get("products").find({ id: id }).value();
    return product;
  },
  createOrder: (userId, name, address, phone, paymentMethod) => {
    let cart = db.get("carts").find({ userId: userId });
    console.log("userId", userId);
    console.log(cart.value());
    order = {
      userId,
      status: "new",
      name,
      userId,
      address,
      phone,
      paymentMethod,
      products: cart.value().products,
    };
    let res = db
      .get("orders")
      .push({
        order,
      })
      .write();
    cart.assign({ products: [] }).write();
    return order;
  },
  getOrderHistory: (userId) => {
    let orders = db("orders").where({ order: { userId } });

    return orders;
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
