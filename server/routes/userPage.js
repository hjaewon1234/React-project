import { Router } from "express";
const router = Router();
import multer from "multer";
import CryptoJS from "crypto-js";

import db from "../models/index.js";

router.route("/").post((req, res) => {
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

router.route("/uploadFile").post(upload.single("file"), async (req, res) => {
  await db.Users.update(
    {
      userName: req.body.name,
      userAddress: req.body.address,
      userAddress1: req.body.address1,
      userImg: req.file.originalname,
    },
    { where: { userId: req.body.userId } }
  );

  res.send(req.body.file);
});

router.route("/passwordChange").post(async (req, res) => {
  const crytoPw = CryptoJS.SHA256(req.body.data).toString();

  await db.Users.update(
    {
      userPw: crytoPw,
    },
    { where: { userId: req.body.userId } }
  );
  res.send("끝낫다.");
});

export default router;
