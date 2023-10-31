import { Router } from "express";
import db from "../models/index.js";

const router = Router();

router.route("/getChat").post(async (req, res) => {
  const data = await db.Chat.findAll({
    attributes: ["name", "text", "importance"],
    order: [["id", "DESC"]],
    where: { room: req.body.room },
  });

  res.send(data);
});

router.route("/pushChat").post(async (req, res) => {
  await db.Chat.create({
    name: req.body.name,
    text: req.body.text,
    room: req.body.room,
    importance: req.body.importance,
  });
  res.send("success");
});
export default router;
