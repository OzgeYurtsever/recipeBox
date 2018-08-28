const express = require('express');
const path = require('path');
const app = express();
const model = require('../dB/model.js');
const bodyParser = require('body-parser');

app.set('port', 3000);

app.use;
let htmlPath = path.join(__dirname, '../public/index.html');
let reactPath = path.join(__dirname, '../client/dist');

app.use('/home', express.static(htmlPath));
app.use(express.static(reactPath));
app.use(bodyParser.json());

//dropdown
app.get('/api/home/:boxName', (req, res) => {
  // console.log('inside server', req.params.boxName);
  model.getRecipes(req.params.boxName, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});

//search
app.get('/api/home/search/:keyWord', (req, res) => {
  // console.log('inside server', req.params.boxName);
  model.findRecipe(req.params.keyWord, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});

//add new boxname
app.get('/api/newBox', (req, res) => {
  console.log('inside server new box');
  model.getBoxNames((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/home', (req, res) => {
  model.saveRecipe(req.body.box, req.body.title, req.body.link, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('POST request to homepage was successful');
    }
  });
});

app.listen(3000, console.log('listening on 3000'));
