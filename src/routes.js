const express = require('express');
const routes = express.Router();

const prodController = require('./controllers/ProductController');

routes.get('/', (req, res) => {
    res.send("<h1>NodeJS API</h1>");
});

routes.get('/products', prodController.readProducts);
routes.get('/products/:id', prodController.readProduct);
routes.post('/products', prodController.createProduct);
routes.put('/products/:id', prodController.updateProduct);
routes.delete('/products/:id', prodController.deleteProduct);

module.exports = routes;