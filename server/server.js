const express = require('express');
const path = require('path');
const app = express();
const model = require('../dB/model.js');

app.set('port', 3000);

let htmlPath = path.join(__dirname, '../public/index.html');
let reactPath = path.join(__dirname, '../client/dist');

app.use('/home', express.static(htmlPath));
app.use(express.static(reactPath));
console.log();

app.get('/api/home/:boxName', (req, res) => {
  console.log('inside server', req.params.boxName);
  model.getRecipes(req.params.boxName, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, console.log('listening on 3000'));
