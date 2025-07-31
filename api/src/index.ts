import express, { json, urlencoded } from 'express';
import productsRouter from './routes/products/index.js';
import authRoutes from './routes/auth/index.js';
import serverless from 'serverless-http';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/products', productsRouter);
app.use('/auth', authRoutes);

if (process.env.NODE_ENV === 'dev') {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

export const handler = serverless(app);