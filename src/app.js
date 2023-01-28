const express = require('express');
const app = express();
//Routes
const homeRouter = require('./routes/home');
const useRouter = require('./routes/user');
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const shoppingCartRouter = require('./routes/shoppingCart');

app.use(express.json());

app.use(homeRouter);
app.use(useRouter);
app.use(productRouter);
app.use(authRouter);
app.use(shoppingCartRouter);

module.exports = app;