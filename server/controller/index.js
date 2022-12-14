import userDatabase from "../Database.js";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

const test = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userId: req.body.inputId },
  });
  return curUser;
};

const login = async (req, res, next) => {
  // const { InputId, InputPw } = req.body;
  const tempUser = await test(req);

  console.log(
    "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
    tempUser.userId
  );
  console.log(
    "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    req.body.inputId
  );
  const userInfo = tempUser.userId === req.body.InputId;
  console.log("testtesttesttesttesttesttesttest:", !userInfo);

  if (userInfo) {
    res.status(403).json("Not Authorized");
  } else {
    try {
      // access Token 발급
      const accessToken = jwt.sign(
        {
          // id: userInfo.id,
          userName: userInfo.username,
          userId: userInfo.userId,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "1m",
          issuer: "About Tech",
        }
      );

      // refresh Token 발급
      const refreshToken = jwt.sign(
        {
          // id: userInfo.id,
          userName: userInfo.username,
          userId: userInfo.userId,
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
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true,
      });

      res.status(200).json("login success");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

const accessToken = async (req, res) => {
  const tempUser = await test(req);

  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);

    const userData = tempUser.userId === data.req.body.InputId;

    const { userPw, ...others } = userData;

    console.log("aaaaaaaaaaaaaaaaaa", userData);

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

const refreshToken = async (req, res) => {
  // 용도 : access token을 갱신.

  const tempUser = await test(req);
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRECH_SECRET);
    const userData = tempUser.userId === data.req.body.InputId;
    console.log("aaaaaaaaaaaaaaaaaa", userData);
    // access Token 새로 발급
    const accessToken = jwt.sign(
      {
        // id: userData.id,
        userName: userData.username,
        userId: userData.userId,
      },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "1m",
        issuer: "About Tech",
      }
    );

    res.cookie("accessToken", accessToken, {
      secure: false,
      httpOnly: true,
    });

    res.status(200).json("Access Token Recreated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginSuccess = async (req, res) => {
  try {
    const tempUser = await test(req);

    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);

    const userData = tempUser.userId === data.req.body.InputId;
    console.log("aaaaaaaaaaaaaaaaaa", userData);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = (req, res) => {
  try {
    res.cookie("accessToken", "");
    res.status(200).json("Logout Success");
  } catch (error) {
    res.status(500).json(error);
  }
};

export { login, accessToken, refreshToken, loginSuccess, logout };

// const login = async (req, res, next) => {
//   const { userId, userPw } = req.body;
//   const curUser = await db.Users.findOne({
//     where: { userId: req.body.inputId },
//   });

//   // console.log(curUser);
//   const userInfo = curUser === userId;

//   if (!userInfo) {
//     res.status(403).json("Not Authorized");
//   } else {
//     try {
//       // access Token 발급
//       const accessToken = jwt.sign(
//         {
//           // id: userInfo.id,
//           userName: userInfo.userName,
//           userId: userInfo.userId,
//         },
//         process.env.ACCESS_SECRET,
//         {
//           expiresIn: "1m",
//           issuer: "About Tech",
//         }
//       );

//       // refresh Token 발급
//       const refreshToken = jwt.sign(
//         {
//           // id: userInfo.id,
//           userName: userInfo.userName,
//           userId: userInfo.userId,
//         },
//         process.env.REFRECH_SECRET,
//         {
//           expiresIn: "24h",
//           issuer: "About Tech",
//         }
//       );

//       // token 전송
//       res.cookie("accessToken", accessToken, {
//         secure: false,
//         httpOnly: true,
//       });

//       res.cookie("refreshToken", refreshToken, {
//         secure: false,
//         httpOnly: true,
//       });

//       res.status(200).json("login success");
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// };

// const accessToken = async (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     const data = jwt.verify(token, process.env.ACCESS_SECRET);

//     const curUser = await db.Users.findOne({
//       where: { userId: req.body.inputId },
//     });
//     const userData = curUser === data.userId;

//     const { userPw, ...others } = userData;

//     res.status(200).json(others);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const refreshToken = async (req, res) => {
//   // 용도 : access token을 갱신.
//   try {
//     const token = req.cookies.refreshToken;
//     const data = jwt.verify(token, process.env.REFRECH_SECRET);
//     const curUser = await db.Users.findOne({
//       where: { userId: req.body.inputId },
//     });
//     const userData = curUser === data.userId;

//     // access Token 새로 발급
//     const accessToken = jwt.sign(
//       {
//         // id: userData.id,
//         userName: userData.userName,
//         userId: userData.userId,
//       },
//       process.env.ACCESS_SECRET,
//       {
//         expiresIn: "1m",
//         issuer: "About Tech",
//       }
//     );

//     res.cookie("accessToken", accessToken, {
//       secure: false,
//       httpOnly: true,
//     });

//     res.status(200).json("Access Token Recreated");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const loginSuccess = async (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     const data = jwt.verify(token, process.env.ACCESS_SECRET);

//     const curUser = await db.Users.findOne({
//       where: { userId: req.body.inputId },
//     });
//     const userData = curUser === data.userId;
//     res.status(200).json(userData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const logout = (req, res) => {
//   try {
//     res.cookie("accessToken", "");
//     res.status(200).json("Logout Success");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// export { login, accessToken, refreshToken, loginSuccess, logout };
