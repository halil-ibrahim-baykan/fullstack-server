const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

module.exports = Item;
