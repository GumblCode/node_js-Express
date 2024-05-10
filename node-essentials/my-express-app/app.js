const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello My Friend Rainer!'));

app.get('/motobikes', (req, res) => {
  const products = [
      { id: 1, typ: "Hardenduro", name: 'TE300i' },
      { id: 2, typ: "AdvendureEnduro", name: 'Tenere700' },
      { id: 3, typ: "Trialbike", name: 'VertigoBusto280' },
  ];

  res.json(products);
});


app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`));