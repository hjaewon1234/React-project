import { Router } from "express";
const router = Router();
import user from "./user.js";
import login from "./login.js";

router.use("/", (req, res, next) => {
  console.log("routes/index.js : " + req.url);
  next();
});

router.use("/user", user);
router.use("/login", login);

export default router;
