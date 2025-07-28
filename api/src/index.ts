import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World 123');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
