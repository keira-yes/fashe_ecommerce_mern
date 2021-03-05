const express = require('express');
const products = require('./data/products');

const app = express();
app.listen(5000, console.log('server is running on 5000 port'));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(item => item.id === req.params.id);
  res.json(product);
});