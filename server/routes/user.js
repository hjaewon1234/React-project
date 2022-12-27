import { Router } from "express";
import crypto from "crypto-js";
import db from "../models/index.js";
const router = Router();

const overapId = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userId: req.body.inputId.replaceAll('"', "") },
  });

  return curUser;
};

const overapNickName = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userName: req.body.inputName.replaceAll('"', "") },
  });
  return curUser;
};

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

router.post("/getUsers", async (req, res) => {
  try {
    // console.log("getUsersbody : ", req.body);
    const curUser = await db.Users.findOne({
      where: { userId: req.body.inputId },
    });
    const curUser1 = await db.Users.findOne({
      where: { userPw: req.body.inputPw },
    });
    const curUser2 = await db.Users.findOne({
      where: { userName: req.body.inputName },
    });

    const idRegExp = /^[a-zA-z0-9]{6,12}$/;
    const currentId = req.body.inputId;

    if (curUser) {
      if (!idRegExp.test(currentId)) {
        console.log("영문으로만 입력");
        res.send({ status: 405 });
      } else {
        console.log("아이디 있음");
        res.send({ status: 401 });
      }
    } else if (curUser1 === req.body.inputPw) {
      console.log("비밀번호 확인");
      res.send({ status: 402 });
    } else if (curUser2) {
      console.log("닉네임 확인");
      res.send({ status: 403 });
    } else {
      console.log("야호야호야호야호", req.body);
      await db.Users.create({
        userName: req.body.inputName,
        userId: req.body.inputId,
        userPw: crypto.SHA256(req.body.inputPw).toString(),
        userAddress: req.body.address,
        userAddress1: req.body.inputAdress,
        userImg: req.body.userImg,
      });
      console.log("회원가입이 완료되었습니다.");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

router.post("/overlapId", async (req, res) => {
  try {
    // console.log("hi", req.body.inputId.replaceAll('"', ""));
    // const curUser = await db.Users.findOne({
    //   where: { userId: req.body.inputId.replaceAll('"', "") },
    // });

    // console.log("curUser : ", curUser);
    // console.log("overlapId : ", req.body);
    // console.log("overlapId : ", req.body.inputId);
    const tempUser = await overapId(req);
    // console.log("tempUser : ", tempUser);
    if (tempUser) {
      console.log("중복되는 아이디가 있습니다.");
      res.send({ status: 401 });
    } else {
      console.log("중복되는 아이디가 없습니다.");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

router.post("/overapNickName", async (req, res) => {
  try {
    const tempUserNickName = await overapNickName(req);

    if (tempUserNickName) {
      console.log("중복되는 닉네임이 있습니다.");
      res.send({ status: 401 });
    } else {
      console.log("중복되는 닉네임이 없습니다.");
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 400 });
  }
});

router.post("/frontCookie", async (req, res) => {
  try {
    res.status(200).json("프론트 쿠키 발급 성공");
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.post("/frontCookie", async (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     const data = jwt.verify(token, process.env.ACCESS_SECRET);
//     const tempUser = await test({ body: { inputId: data.userId } });
//     global.userId = tempUser.userId;
//     global.userName = tempUser.userName;
//   } catch (error) {
//     try {
//       const token = req.cookies.refreshToken;
//       const data = jwt.verify(token, process.env.REFRECH_SECRET);
//       const tempUser = await test({ body: { inputId: data.userId } });
//       // access Token 새로 발급
//       const accessToken = jwt.sign(
//         {
//           username: tempUser.userame,
//           userId: tempUser.userId,
//         },
//         process.env.ACCESS_SECRET,
//         {
//           expiresIn: "10m",
//           issuer: "About Tech",
//         }
//       );

//       res.cookie("accessToken", accessToken, {
//         secure: false,
//         httpOnly: true,
//       });

//       global.userId = data.userId;
//       global.userName = data.userName;

//       if (global.userId) {
//         console.log("global.userIdglobal.userIdglobal.userId", global.userId);
//         res
//           .status(200)
//           .json({ userId: global.userId, userName: global.userName });
//       } else {
//         res.status(400).send("쿠키 발급 안됨");
//       }
//     } catch (error) {}
//   }
// });

export default router;
