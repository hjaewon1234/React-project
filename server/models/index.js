import configJson from "../config/config.json" assert { type: "json" };
const config = configJson["development"];

import Users from "./user.js";
import Products from "./product.js";
import Category from "./category.js";
const db = { Users, Products, Category };

import Sequelize from "sequelize";
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Users.init(sequelize);
Products.init(sequelize);
Category.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
