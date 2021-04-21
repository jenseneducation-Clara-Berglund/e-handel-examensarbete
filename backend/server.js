'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

const {
    createUser
} = require("./dbModule");

app.post('/user', (req, res) => {
    console.log(req.body)
    let fullName = req.body.fullName;
    let email = req.body.email;
    let password = req.body.password;

    let user = createUser(fullName, email, password)
    res.send(user);

});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);