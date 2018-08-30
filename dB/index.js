const { Client } = require('pg');
// const passwords = require('../../passwords.js');

const connection = {
  user: 'postgres',
  host: 'localhost',
  database: 'recipe_box',
  password: 'Testing1234!',
  port: 5432
};

const client = new Client(connection);
// Pool.connect();
client.connect();

module.exports = client;
