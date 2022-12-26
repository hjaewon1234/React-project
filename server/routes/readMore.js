import { Router } from "express";
const router = Router();

router.route("/").post((req, res) => {
  res.send(req.body);
});

// router.route("/getReadMore").post((req, res) => {
//   res.send(req.body);
// });

export default router;
