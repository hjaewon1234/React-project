import { Router } from "express";
import db from "../models/index.js";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send();
  })
  .post((req, res) => {
    res.send(req.body);
  });

router.get("/success", async (req, res) => {
  const curUser = await db.Users.findOne({
    where: { userId: req.body.inputId },
  });

  try {
    if (curUser) {
      res.status(403).json("asd");
    }
  } catch (err) {
    res.send({ status: 400 });
  }
});

export default router;
