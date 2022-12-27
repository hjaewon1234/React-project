import { Router } from "express";
const router = Router();

import db from "../models/index.js";

router.route("/").post((req, res) => {
  res.send(req.body);
});

router.route("/buy").post((req, res) => {
  console.log("바디다", req.body);
  const sendAry = [];
  const len = req.body.length;
  console.log(req.body.productId);
  req.body.map((item) => {
    db.Users.findOne({ where: { id: item.userId } }).then((user) => {
      db.Products.findOne({ where: { id: item.productId } }).then((product) => {
        db.Order.create({ count: item.num })
          .then((order) => {
            user.addOrder(order);
            product.addOrder(order);
            return order;
          })
          .then((data) => {
            sendAry.push(data);
          });
        db.Cart.destroy({ where: { id: item.id } });
      });
    });
  });
  // .then(() => {
  //   res.send(sendAry);
  // });
  const intervalId = setInterval(() => {
    if (sendAry.length == len) {
      clearInterval(intervalId);
      res.send(sendAry);
    }
  }, 100);
});

export default router;
