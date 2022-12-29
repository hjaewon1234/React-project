import jwt from "jsonwebtoken";
import db from "../models/index.js";
import crypto from "crypto-js";

const test = async (req) => {
  const curUser = await db.Users.findOne({
    where: {
      userId: req.body.inputId,
    },
  });
  if (curUser.dataValues.userPw == crypto.SHA256(req.body.inputPw).toString()) {
    return curUser;
  } else {
    return undefined;
  }
};

const login = async (req, res, next) => {
  const tempUser = await test(req);
  if (tempUser) {
    // access Token 발급
    const accessToken = jwt.sign(
      {
        userName: tempUser.userName,
        userId: tempUser.userId,
      },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "10m",
        issuer: "About Tech",
      }
    );
    // refresh Token 발급
    const refreshToken = jwt.sign(
      {
        userName: tempUser.userName,
        userId: tempUser.userId,
      },
      process.env.REFRECH_SECRET,
      {
        expiresIn: "24h",
        issuer: "About Tech",
      }
    );
    // token 전송
    res.cookie("accessToken", accessToken, {
      secure: false,
      httpOnly: false,
      // httpOnly: true,
      // Credential: true,
    });

    res.cookie("refreshToken", refreshToken, {
      secure: false,
      httpOnly: false,
      // httpOnly: true,
      // Credential: true,
    });

    res.status(200).json({
      userId: tempUser.userId,
      userName: tempUser.userName,
      userAddress: tempUser.userAddress,
      userAddress1: tempUser.userAddress1,
      userImg: tempUser.userImg,
      userImportance: Math.floor(Math.random() * 5),
    });
  } else {
    res.status(402).json("유저 못찾음");
  }
};

const accessToken = async (req, res) => {
  const tempUser = await test(req);
  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userData = tempUser.userId === data.req.body.InputId;
    const { userPw, ...others } = userData;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

const refreshToken = async (req, res) => {
  // 용도 : access token을 갱신.

  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRECH_SECRET);
    console.log("aaaaaaaaaaaaaaaaaa", userData);
    // access Token 새로 발급
    const accessToken = jwt.sign(
      {
        userName: data.userName,
        userId: data.userId,
      },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "30m",
        issuer: "About Tech",
      }
    );

    res.cookie("accessToken", accessToken, {
      secure: false,
      httpOnly: false,
    });

    res.status(200).json("Access Token Recreated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginSuccess = async (req, res, next) => {
  // try {
  //   const token = req.cookies.accessToken;
  //   const data = jwt.verify(token, process.env.ACCESS_SECRET);
  //   const tempUser = await test({ body: { inputId: data.userId } });
  //   global.userId = tempUser.userId;
  //   global.userName = tempUser.userName;
  //   global.userPw = tempUser.userPw;
  // } catch (error) {
  //   try {
  //     const token = req.cookies.refreshToken;
  //     const data = jwt.verify(token, process.env.REFRECH_SECRET);
  //     const tempUser = await test({
  //       body: { inputId: data.userId, inputPw: data.userPw },
  //     });
  //     // access Token 새로 발급
  //     const accessToken = jwt.sign(
  //       {
  //         username: tempUser.username,
  //         userId: tempUser.userId,
  //       },
  //       process.env.ACCESS_SECRET,
  //       {
  //         expiresIn: "10m",
  //         issuer: "About Tech",
  //       }
  //     );

  //     res.cookie("accessToken", accessToken, {
  //       secure: false,
  //       httpOnly: false,
  //     });

  //     global.userId = data.userId;
  //     global.userName = data.userName;
  //     global.userPw = data.userPw;
  //   } catch (error) {}
  // }
  next();
};

const check = async (req, res) => {
  try {
    const tempUser = jwt.verify(
      req.cookies.accessToken,
      process.env.ACCESS_SECRET
    );
    req.userData = {};
    req.userData.userId = tempUser.userId;
    const userDbData = await db.Users.findOne({
      where: { userId: tempUser.userId },
    });
    req.userData.userName = userDbData.dataValues.userName;
    req.userData.userImg = userDbData.dataValues.userImg;
    req.userData.userAddress = userDbData.dataValues.userAddress;
    req.userData.userAddress1 = userDbData.dataValues.userAddress1;
    req.userData.userImportance = Math.floor(Math.random() * 5);
  } catch (err) {
    try {
      const data = jwt.verify(token, process.env.REFRECH_SECRET);
      const accessToken = jwt.sign(
        {
          userName: data.userName,
          userId: data.userId,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "30m",
          issuer: "About Tech",
        }
      );

      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: false,
      });

      req.userData.userId = data.userId;
      req.userData.userName = data.userName;
    } catch (error) {
      req.userData = {};
    }
  }

  if (req.userData.userId) {
    res.status(200).send({
      userId: req.userData.userId,
      userName: req.userData.userName,
      userPw: req.userData.userPw,
      userImg: req.userData.userImg,
      userAddress: req.userData.userAddress,
      userAddress1: req.userData.userAddress1,
      userImportance: req.userData.userImportance,
    });
  } else {
    res.status(403).send("req.userData가 없는뎅 ?");
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    req.userData = {};
    // global.userPw = "";
    res.status(200).send("Logout Success");

    // res.status(200).send({ userId: global.userId, userName: global.userName });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { login, accessToken, refreshToken, loginSuccess, logout, check };
