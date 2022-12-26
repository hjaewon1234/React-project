import { Router } from "express";
const router = Router();
import Products from "../models/product.js";

import db from "../models/index.js";

router.route("/").post((req, res) => {
  res.send(req.body);
});

router.route("/damgi").post((req, res) => {
  res.send(req.body);
});

router.route("/addcart").post(async (req, res) => {
  try {
    const user = await db.Users.findOne({ where: { userId: global.userId } });
    const product = await db.Products.findOne({
      where: { id: req.body.productId },
    });
    const tempCart = await db.Cart.findOne({
      where: {
        users_id: user.id,
        products_id: product.id,
      },
    });
    if (tempCart) {
      tempCart.update({ count: +req.body.count + tempCart.count });
      res.send();
    } else {
      const cart = await db.Cart.create({ count: req.body.count });
      user.addCart(cart);
      product.addCart(cart);
      res.send();
    }
  } catch (err) {
    console.error(err);
    res.end();
  }
});

router.route("/getCartItem").post(async (req, res) => {
  try {
    const userIndex = await db.Users.findOne({
      where: { user_id: global.userId },
    });
    const addedItem = await db.Cart.findAll({
      where: {
        users_id: userIndex.dataValues.id,
      },
      include: [
        {
          model: Products,
          // attributes: ["price"],
          // 필터
        },
      ],
    });
    res.send(addedItem);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

export default router;
