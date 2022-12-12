import { Router } from "express";
import crypto from "crypto-js";
const router = Router();

import db from "../models/index.js";

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

router.post("/Users", (req, res) => {
  db.Users.findAll().then((data) => {
    console.log(data);
    res.send({ users: data });
  });
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
      });
      console.log("하이");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

export default router;
