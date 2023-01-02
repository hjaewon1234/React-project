import { Router } from "express";
const router = Router();
import multer from "multer";
import db from "../models/index.js";
import Users from "../models/user.js";
import Review from "../models/review.js";
import Products from "../models/product.js";
import fs from "fs";

router.route("/productManage").post(async (req, res) => {
  const productInfo = await db.Order.findAll({
    include: [
      {
        model: db.Products,
        attributes: ["brand", "name", "price", "img", "id"],
      },
      { model: db.Users, attributes: ["userId"] },
    ],
  });
  const sliceInfo = productInfo.slice(
    req.body.number * 10,
    req.body.number * 10 + 10
  );

  res.send(sliceInfo);
});

router.route("/productPage").post(async (req, res) => {
  let pageNum = [];

  const pagingLength = (await db.Order.findAll()).length;

  for (let i = 0; i < pagingLength / 10; i++) {
    pageNum.push(i);
  }

  res.send(pageNum);
});

router.route("/qnaInfo").post(async (req, res) => {
  const tempDbFind = await Review.findAll({
    include: [
      { model: Users, attributes: ["userId", "userName", "userImg"] },
      { model: Products, attributes: ["brand", "name", "price", "img"] },
    ],
  });
  const sliceQnaInfo = tempDbFind.slice(
    req.body.number * 10,
    req.body.number * 10 + 10
  );

  res.send(sliceQnaInfo);
});

router.route("/qnaPage").post(async (req, res) => {
  let qnapageNum = [];

  const qnapagingLength = (await db.Review.findAll()).length;

  for (let i = 0; i < qnapagingLength / 10; i++) {
    qnapageNum.push(i);
  }

  res.send(qnapageNum);
});

router.route("/answerQna").post(async (req, res) => {
  await db.Qna.update(
    {
      qnaAnswer: req.body.qnaAnswer,
      qnaState: true,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.send(req.body);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Img/");
  },
  filename: (req, file, cb) => {
    const newFileName = (file.originalname = Buffer.from(
      file.originalname,
      "latin1"
    ).toString("utf8"));
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

router.route("/uploadFile").post(upload.array("file", 4), async (req, res) => {
  let joinArr = [];
  for (let i = 0; i < req.files.length; i++) {
    joinArr.push(req.files[i].originalname);
  }
  const intPrice = parseInt(req.body.price);
  const tempProduct = await db.Products.create({
    name: req.body.name,
    price: intPrice,
    brand: req.body.brand,
    description: req.body.description,
    img: joinArr.join(),
  });

  const tempCa = await db.Category.findOne({
    where: {
      smallsort: req.body.smallsort,
    },
  });
  tempCa.addProducts(tempProduct);

  res.send("작업완료");
});

export default router;
