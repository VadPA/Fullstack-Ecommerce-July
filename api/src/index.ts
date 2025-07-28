import express from 'express';
import productsRouter from './routes/products/index';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
