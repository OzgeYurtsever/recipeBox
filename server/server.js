const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);

let htmlPath = path.join(__dirname, '../public/index.html');
let reactPath = path.join(__dirname, '../client/dist');

app.use('/home', express.static(htmlPath));
app.use(express.static(reactPath));
console.log();
// app.get('/', (req, res) => {
//   res.sendStatus(200);
// });

app.listen(3000, console.log('listening on 3000'));
