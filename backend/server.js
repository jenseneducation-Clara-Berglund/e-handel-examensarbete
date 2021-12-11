'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

const {
    createUser, login, checkSession, getAllProducts, getProductById
} = require("./dbModule");

app.post('/user/register/', (req, res) => {
    console.log(req.body)
    let fullName = req.body.fullName;
    let email = req.body.email;
    let password = req.body.password;

    try {
        let user = createUser(fullName, email, password)

        res.status(201)
        res.json(user);
    }
    catch (error) {
        res.status(403)
        res.json({ error: error })
    }
});

app.post('/user/login/', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        let session = login(email, password)
        res.status(201)
        res.json(session);
    }
    catch (error) {
        res.status(404)
        res.json({ error: error })
    }
});

app.get('/products/', (req, res) => {
    let session = checkSession(req.headers.authorization)

    if (session !== undefined) {
        //  "Hello your session exists!";
        const products = getAllProducts();
        res.send(products);
    } else {
        res.send("Hello your session has expired.... !");
    }
});


app.get("/products/:productId", (req, res) => {
    let session = checkSession(req.headers.authorization)

    if (session !== undefined) {
        //  "Hello your session exists!";
        const productId = parseInt(req.params.productId);
        const product = getProductById(productId);
        res.send(product);
    } else {
        res.send("Hello your session has expired.... !");
    }

});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);