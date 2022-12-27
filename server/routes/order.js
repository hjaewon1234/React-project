import { Router } from "express";
const router = Router();

import db from "../models/index.js";

router.route("/").post((req, res) => {
  res.send(req.body);
});

router.route("/buy").post(async (req, res) => {
  const sendAry = [];
  try {
    for (let i = 0; i < req.body.length; i++) {
      const userData = await db.Users.findOne({
        where: { id: req.body[i].userId },
      });
      const product = await db.Products.findOne({
        where: { id: req.body[i].productId },
      });
      const order = await db.Order.create({ count: req.body[i].num });
      userData.addOrder(order);
      product.addOrder(order);
      sendAry.push(order);
      await db.Cart.destroy({ where: { id: req.body[i].id } });
    }
    res.send(sendAry);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

export default router;
