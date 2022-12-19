import { Router } from "express";
import db from "../models/index.js";

const router = Router();

router.route("/getChat").post((req, res) => {
  db.Chat.findAll().then((data) => {
    res.send(data);
  });
});

router.route("/pushChat").post((req, res) => {
  console.log("pushChat", req.body);
  db.Chat.create({
    name: req.body.name,
    text: req.body.text,
    importance: req.body.importance,
  });
  res.send("success");
});
export default router;
