import { Router } from "express";
import crypto from "crypto-js";
import db from "../models/index.js";
const router = Router();

const overapId = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userId: req.body.inputId },
  });
  return curUser;
};

const overapNickName = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userName: req.body.inputName },
  });
  return curUser;
};

// api/user
router
  .route("/")
  .get((req, res) => {
    res.send();
  })
  .post((req, res) => {
    console.log(req.body);
    res.send(req.body);
  });

router.post("/getUsers", async (req, res) => {
  try {
    console.log("getUsersbody : ", req.body);
    const curUser = await db.Users.findOne({
      where: { userId: req.body.inputId },
    });

    console.log(curUser);
    if (curUser) {
      console.log("이미있음");
      res.send({ status: 401 });
    } else {
      await db.Users.create({
        userName: req.body.inputName,
        userId: req.body.inputId,
        userPw: crypto.SHA256(req.body.inputPw).toString(),
        userAddress: req.body.inputAdress,
        userAddress1: req.body.inputAdress1,
        publish: "",
      });
      console.log("하이");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

router.post("/overlapId", async (req, res) => {
  try {
    const tempUserId = await overapId(req);

    console.log("oooooooooooooooooooooooooo", curUser);
    if (tempUserId) {
      console.log("중복되는 아이디가 있습니다.");
      res.send({ status: 401 });
    } else {
      console.log("중복되는 아이디가 없습니다.");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

router.post("/overapNickName", async (req, res) => {
  try {
    const tempUserNickName = await overapNickName(req);

    console.log("oooooooooooooooooooooooooo", curUser);
    if (tempUserNickName) {
      console.log("중복되는 닉네임이 있습니다.");
      res.send({ status: 401 });
    } else {
      console.log("중복되는 닉네임이 없습니다.");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

export default router;
