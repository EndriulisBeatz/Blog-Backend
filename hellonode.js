const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Testing!')
});

app.get('/blah', (req, res) => {
  res.send('Rude!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
