import { Router } from "express";
import crypto from "crypto-js";
import db from "../models/index.js";
import jwt from "jsonwebtoken";
const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send();
  })
  .post((req, res) => {
    console.log(req.body);
    res.send(req.body);
  });

// router.post("/success", async (req, res) => {
//   const curUser = await db.Users.findOne({
//     where: { userId: req.body.inputId },
//   });

//   const curUserPw = await db.Users.findOne({
//     where: {
//       userId: req.body.inputId,
//       userPw: crypto.SHA256(req.body.inputPw).toString(),
//     },
//   });

//   try {
//     if (curUser) {
//       if (curUserPw) {
//         res.clearCookie("tgtw");
//         // 쿠키에 jwt를 30분간 추가해 준다.
//         res.cookie(
//           "tgtw",
//           jwt.sign({ userId: req.body.inputId }, process.env.COOKIE_SECRET),
//           { expires: new Date(Date.now() + 60000 * 30) }
//         );
//         res.send({ status: 200 }); // 로그인 완료.
//       } else {
//         res.send({ status: 402 }); // 비밀번호가 일치하지 않습니다.
//       }
//     } else {
//       res.send({ status: 401 }); // 없는 아이디입니다.
//     }
//   } catch (err) {
//     console.error(err);
//     res.send({ status: 400 });
//   }
// });

export default router;
