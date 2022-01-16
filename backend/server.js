"use strict";

const express = require("express");
const cors = require("cors");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
const {
  createUser,
  login,
  checkSession,
  getAllProducts,
  getProductById,
  getOrCreateCartForUser,
  addProductToCart,
  removeProductFromCart,
} = require("./dbModule");

app.post("/user/register/", (req, res) => {
  console.log(req.body);
  let fullName = req.body.fullName;
  let email = req.body.email;
  let password = req.body.password;

  try {
    let user = createUser(fullName, email, password);

    res.status(201);
    res.json(user);
  } catch (error) {
    res.status(403);
    res.json({ error: error });
  }
});

app.post("/user/login/", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    let session = login(email, password);
    res.status(201);
    res.json(session);
  } catch (error) {
    res.status(404);
    res.json({ error: error });
  }
});

app.get("/products/", (req, res) => {
  let session = checkSession(req.headers.authorization);

  if (session !== undefined) {
    //  "Hello your session exists!";
    const products = getAllProducts();
    res.send(products);
  } else {
    res.status(403);
    res.send("Hello your session has expired.... !");
  }
});

app.get("/products/:productId", (req, res) => {
  let session = checkSession(req.headers.authorization);

  if (session !== undefined) {
    //  "Hello your session exists!";
    const productId = parseInt(req.params.productId);
    const product = getProductById(productId);
    res.send(product);
  } else {
    res.status(403);
    res.send("Hello your session has expired.... !");
  }
});

app.get("/cart/", (req, res) => {
  let session = checkSession(req.headers.authorization);

  if (session !== undefined) {
    //  "Hello your session exists!";
    const userId = session.user;
    const cart = getOrCreateCartForUser(userId);
    res.send(cart);
  } else {
    res.status(403);
    res.send("Hello your session has expired.... !");
  }
});

app.post("/cart/add/:productId/", (req, res) => {
  let session = checkSession(req.headers.authorization);
  let productId = parseInt(req.params.productId);
  if (session !== undefined) {
    //  "Hello your session exists!";
    const userId = session.user;
    const cart = addProductToCart(userId, productId);
    res.status(201);
    res.send(cart);
  } else {
    res.status(403);
    res.send("Hello your session has expired.... !");
  }
});
app.delete("/cart/remove/:cartProductId/", (req, res) => {
  let session = checkSession(req.headers.authorization);
  let cartProductId = req.params.cartProductId;
  if (session !== undefined) {
    //  "Hello your session exists!";
    const userId = session.user;
    const cart = removeProductFromCart(userId, cartProductId);
    res.status(204);
    res.send();
  } else {
    res.status(403);
    res.send("Hello your session has expired.... !");
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
