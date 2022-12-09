import { Router } from "express";
const router = Router();
import user from "./user.js";
import product from "./product.js";

router.use("/", (req, res, next) => {
  console.log("routes/index.js : " + req.url);
  next();
});

router.use("/user", user);
router.use("/product", product);

export default router;
