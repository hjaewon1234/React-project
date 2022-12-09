import { Router } from "express";
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

router.post("/getUsers", (req, res) => {
  db.Users.findAll().then((data) => {
    console.log(data);
    res.send({ users: data });
  });
});

export default router;
