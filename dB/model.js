const client = require('./index.js');

const getRecipes = (boxName, callback) => {
  const text = 'select * from recipes where boxname = $1';
  client.query(text, [boxName], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(err, res.rows);
    }
  });
};

const saveRecipe = (boxName, title, link, callback) => {
  const text =
    'insert into recipes (boxName, title, link, hasShopingList) values ($1, $2, $3, false)';
  client.query(text, [boxName, title, link], (err, res) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(err, res.rows);
    }
  });
};

const findRecipe = (keyWord, callback) => {
  const text = `select * from recipes where title like '%${keyWord}%'`;

  client.query(text, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(err, res.rows);
    }
  });
};

const getBoxNames = callback => {
  const text = `select distinct boxname from recipes`;
  client.query(text, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(err, res.rows);
    }
  });
};

module.exports = { getRecipes, saveRecipe, findRecipe, getBoxNames };

// getRecipes('salads', (err, data) => {
//   err ? console.log(err) : console.log(data);
// });

// saveRecipe(
//   'soups',
//   'lentil soup',
//   'https://www.foodnetwork.com/recipes/alton-brown/lentil-soup-recipe-1947017',
//   (err, data) => {
//     err ? console.log(err) : console.log(data.rows);
//   }
// );

// findRecipe('soup', (err, data) => {
//   err ? console.log(err) : console.log(data);
// });

// getBoxNames((err, data) => {
//   err ? console.log(err) : console.log(('here', data));
// });
