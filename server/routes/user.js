import { Router } from "express";
import crypto from "crypto-js";
import db from "../models/index.js";
const router = Router();

const overapId = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userId: req.body.inputId.replace(/\"/g, "") },
  });

  return curUser;
};

const overapNickName = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userName: req.body.inputName.replace(/\"/g, "") },
  });
  return curUser;
};

router
  .route("/")
  .get((req, res) => {
    res.send();
  })
  .post((req, res) => {
    res.send(req.body);
  });

router.post("/getUsers", async (req, res) => {
  try {
    const curUser = await db.Users.findOne({
      where: { userId: req.body.inputId },
    });
    const curUser1 = await db.Users.findOne({
      where: { userPw: req.body.inputPw },
    });
    const curUser2 = await db.Users.findOne({
      where: { userName: req.body.inputName },
    });

    const idRegExp = /^[a-zA-z0-9]{6,12}$/;
    const currentId = req.body.inputId;

    if (curUser) {
      if (!idRegExp.test(currentId)) {
        res.send({ status: 405 });
      } else {
        res.send({ status: 401 });
      }
    } else if (curUser1 === req.body.inputPw) {
      res.send({ status: 402 });
    } else if (curUser2) {
      res.send({ status: 403 });
    } else {
      await db.Users.create({
        userName: req.body.inputName,
        userId: req.body.inputId,
        userPw: crypto.SHA256(req.body.inputPw).toString(),
        userAddress: req.body.address,
        userAddress1: req.body.inputAdress,
        userImg: req.body.userImg,
      });
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

router.post("/overlapId", async (req, res) => {
  try {
    const tempUser = await overapId(req);
    if (tempUser) {
      res.send({ status: 401 });
    } else {
      res.send({ status: 200 });
    }
  } catch (err) {
    res.send({ status: 400 });
  }
});

router.post("/overapNickName", async (req, res) => {
  try {
    const tempUserNickName = await overapNickName(req);

    if (tempUserNickName) {
      res.send({ status: 401 });
    } else {
      res.send({ status: 200 });
    }
  } catch (err) {
    res.send({ status: 400 });
  }
});

router.post("/frontCookie", async (req, res) => {
  try {
    res.status(200).json("프론트 쿠키 발급 성공");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
