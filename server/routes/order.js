import e, { Router } from "express";
const router = Router();

import db from "../models/index.js";

router.route("/").post((req, res) => {
  res.send(req.body);
});

router.route("/buy").post((req, res) => {
  // OrderTable user와 product 둘 다 관계 맺었을 때 넣는 방법
  db.Users.findOne({ where: { id: 1 } }).then((user) => {
    db.Products.findOne({ where: { id: 3 } }).then((product) => {
      db.Order.create({ count: 1 })
        .then((order) => {
          user.addOrder(order);
          product.addOrder(order);
          return order;
        })
        .then((data) => {
          res.send(data);
        });
    });
  });
});

export default router;
