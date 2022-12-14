import { Router } from "express";
const router = Router();

import db from "../models/index.js";

router.route("/productManage").post(async (req, res) => {
  console.log("지나갔다.");

  const productInfo = await db.Products.findAll();
  const sliceInfo = productInfo.slice(
    req.body.number * 10,
    req.body.number * 10 + 10
  );

  res.send(sliceInfo);
});

router.route("/productPage").post(async (req, res) => {
  let pageNum = [];

  const pagingLength = (await db.Products.findAll()).length;

  console.log(pagingLength);
  for (let i = 0; i < pagingLength / 10; i++) {
    pageNum.push(i);
  }

  res.send(pageNum);
});

export default router;
