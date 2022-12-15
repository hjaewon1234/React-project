import { Router } from "express";
const router = Router();

import db from "../models/index.js";

router.route("/").post((req, res) => {
  res.send(req.body);
});

router.route("/search").post((req, res) => {
  const temp = [];
  console.log("search", req.body);
  db.Products.findAll()
    .then((data) => {
      console.log(data[0], data[0].name.includes(req.body.value));
      data.map((item) => {
        if (
          item.name.includes(req.body.value) ||
          item.brand.includes(req.body.value)
        )
          temp.push(item.id);
      });
      return temp;
    })
    .then((data) => {
      data.map((item) => {
        db.Search.findOne({ where: { products_id: item } })
          .then((data) => {
            return data?.dataValues;
          })
          .then((data) => {
            console.log(data);
            if (!data)
              db.Products.findOne({ where: { id: item } }).then((product) => {
                db.Search.create({ count: 0 }).then((search) => {
                  product.addSearch(search);
                });
              });
            else {
              db.Search.update(
                { count: data.count + 1 },
                { where: { id: data.id } }
              );
            }
          });
      });
      res.send();
    });
});

router.route("/searchWord").post((req, res) => {
  db.Products.findAll().then((data) => {
    const sendData = [];
    const filtered = data.filter((item) => {
      return (
        item.dataValues.name?.includes(req.body.sword) ||
        item.dataValues.brand?.includes(req.body.sword)
      );
    });
    filtered.map((item, index) => {
      // if (
      //   index < req.body.boxIdx - 1 ||
      //   index >= req.body.boxIdx + req.body.idx - 1
      // )
      //   return;
      return sendData.push(item.dataValues);
    });
    res.send(sendData);
  });
});

export default router;
