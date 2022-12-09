import { Router } from "express";
const router = Router();

import db from "../models/index.js";

const users = [
  {
    userId: "aaa",
    userPw: "aaa",
    userName: "내가유저다",
    phone: "010-1234-5678",
    address: "천호동",
  },
];

// db에 아무 정보가 없을 시 users의 첫 아이템을 db에 넣어준다.
db.Users.findAll().then((data) => {
  if (data.length === 0) {
    db.Users.create(users[0]);
  }
});

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

router.post("/getUsers", (req, res) => {
  db.Users.findAll().then((data) => {
    console.log(data);
    res.send({ users: data });
  });
});

export default router;
