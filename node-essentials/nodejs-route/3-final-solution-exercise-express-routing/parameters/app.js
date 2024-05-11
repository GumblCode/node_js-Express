const express = require('express');
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: 'TE300i',
    Typ: 'Hardenduro',
  },
  {
    id: 2,
    name: 'Tenere700',
    Typ: 'TwinshockEnduro',
  },
  {
    id: 3,
    name: 'VertigoBusto280',
    Typ: 'TrialMoto',
  },
];

app.get('/', (req, res) => res.send('Hello Rainer, here are your API!'));

app.get('/products/:id', (req, res) => {
  res.json(products.find((p) => p.id === +req.params.id));
});

app.get('/products', (req, res) => {
  const page = +req.query.page;
  const pageSize = +req.query.pageSize;

  if (page && pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    res.json(products.slice(start, end));
  } else {
    res.json(products);
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
