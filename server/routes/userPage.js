import { Router } from "express";
const router = Router();
import multer from "multer";

import db from "../models/index.js";

router.route("/").post((req, res) => {
  res.send(req.body);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Img/");
    // destination은 저장할 경로
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

router.route("/uploadFile").post(upload.single("userFile"), (req, res) => {
  console.log(req.file);
  res.send(req.body);
});

export default router;
