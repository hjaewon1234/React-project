import { createRequire } from "module";
const require = createRequire(import.meta.url);
const configJson = require("../config/config.json");
const config = configJson["development"];

import Users from "./user.js";
import Products from "./product.js";
import Category from "./category.js";
import Qna from "./Qna.js";
import Search from "./search.js";
import TopTen from "./topten.js";
import Chat from "./chat.js";
import Order from "./order.js";
import Cart from "./cart.js";
import Review from "./review.js";

const db = {
  Users,
  Products,
  Category,
  Qna,
  Search,
  TopTen,
  Chat,
  Order,
  Cart,
  Review,
};

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
Qna.init(sequelize);
Search.init(sequelize);
TopTen.init(sequelize);
Chat.init(sequelize);
Order.init(sequelize);
Cart.init(sequelize);
Review.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
