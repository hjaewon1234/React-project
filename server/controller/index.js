import userDatabase from "../Database.js";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

// const test = async (req) => {
//   const curUser = await db.Users.findOne({
//     where: { userId: req.body.inputId },
//   });
//   return curUser;
// };

// const login = async (req, res, next) => {
//   if (global.userId) {
//     res.send("로그인 되어있습니다.");
//   } else {
//     // const { InputId, InputPw } = req.body;
//     const tempUser = await test(req);

//     console.log(
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       global.userId
//     );
//     console.log(
//       "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
//       tempUser.userId
//     );
//     console.log(
//       "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
//       req.body.inputId
//     );
//     // const tempUser = tempUser.userId === req.body.InputId;

//     // if (tempUser) {
//     if (!tempUser) {
//       res.status(403).json("Not Authorized");
//     } else {
//       try {
//         // access Token 발급
//         const accessToken = jwt.sign(
//           {
//             // id: tempUser.id,
//             username: tempUser.userame,
//             userId: tempUser.userId,
//           },
//           process.env.ACCESS_SECRET,
//           {
//             expiresIn: "10m",
//             issuer: "About Tech",
//           }
//         );
//         // console.log("accessTokenaccessTokenaccessToken", accessToken);

//         // refresh Token 발급
//         const refreshToken = jwt.sign(
//           {
//             // id: tempUser.id,
//             username: tempUser.username,
//             userId: tempUser.userId,
//           },
//           process.env.REFRECH_SECRET,
//           {
//             expiresIn: "24h",
//             issuer: "About Tech",
//           }
//         );
//         // console.log("refreshTokenrefreshTokenrefreshToken", refreshToken);

//         // token 전송
//         res.cookie("accessToken", accessToken, {
//           secure: false,
//           httpOnly: true,
//         });

//         res.cookie("refreshToken", refreshToken, {
//           secure: false,
//           httpOnly: true,
//         });

//         res.status(200).json("login success");
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     }
//   }
// };

// const accessToken = async (req, res) => {
//   console.log("reqqqqqqqqq", req.body);
//   const tempUser = await test(req);
//   try {
//     const token = req.cookies.accessToken;
//     const data = jwt.verify(token, process.env.ACCESS_SECRET);

//     const userData = tempUser.userId === data.req.body.InputId;

//     const { userPw, ...others } = userData;

//     res.status(200).json(others);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const refreshToken = async (req, res) => {
//   // 용도 : access token을 갱신.

//   // const tempUser = await test(req);
//   try {
//     const token = req.cookies.refreshToken;
//     const data = jwt.verify(token, process.env.REFRECH_SECRET);
//     // const userData = tempUser.userId === data.req.body.InputId;
//     console.log("aaaaaaaaaaaaaaaaaa", userData);
//     // access Token 새로 발급
//     const accessToken = jwt.sign(
//       {
//         // id: userData.id,
//         username: data.username,
//         userId: data.userId,
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

// const loginSuccess = async (req, res, next) => {
//   try {
//     console.log("ttt", req.body);
//     const token = req.cookies.accessToken;
//     const data = jwt.verify(token, process.env.ACCESS_SECRET);
//     console.log("gggggggggg", data);
//     const tempUser = await test({ body: { inputId: data.userId } });

//     // console.log("tempUser", tempUser);
//     // const userData = tempUser.userId === data.req.body.InputId;
//     // console.log("aaaaaaaaaaaaaaa", tempUser.userId);
//     // res.status(200).json({ userId: data.userId, userName: tempUser.userName });
//     // console.log("tempUser", tempUser);
//     global.userId = tempUser.userId;
//     global.userName = tempUser.userName;
//     console.log("zzzzzzzzzzzz", global.userName);
//     next();
//   } catch (error) {
//     // res.status(500).json(error);
//     try {
//       const token = req.cookies.refreshToken;
//       const data = jwt.verify(token, process.env.REFRECH_SECRET);
//       // const userData = tempUser.userId === data.req.body.InputId;
//       // console.log("aaaaaaaaaaaaaaaaaa", userData);
//       const tempUser = await test({ body: { inputId: data.userId } });
//       // access Token 새로 발급
//       const accessToken = jwt.sign(
//         {
//           // id: userData.id,
//           username: tempUser.username,
//           userId: tempUser.userId,
//         },
//         process.env.ACCESS_SECRET,
//         {
//           expiresIn: "1m",
//           issuer: "About Tech",
//         }
//       );

//       res.cookie("accessToken", accessToken, {
//         secure: false,
//         httpOnly: true,
//       });

//       global.userId = data.userId;
//       global.userName = data.userName;
//       next();
//     } catch (error) {
//       // res.status(500).json(error);
//       next();
//     }
//   }
// };

// const check = (req, res) => {
//   if (global.userId) {
//     console.log("xxxxxxxxxx", global.userId);
//     res.status(200).json({ userId: global.userId, userName: global.userName });
//   } else {
//     res.status(400).send("로그인 되어있지 않습니다.");
//   }
// };

// const logout = (req, res) => {
//   try {
//     res.clearCookie("accessToken");
//     res.clearCookie("refreshToken");
//     global.userId = "";
//     global.userName = "";
//     res.status(200).json("Logout Success");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const test = async (req) => {
  const curUser = await db.Users.findOne({
    where: { userId: req.body.inputId },
  });
  return curUser;
};

const login = async (req, res, next) => {
  if (global.userId) {
    res.send("로그인 되어있습니다.");
  } else {
    const tempUser = await test(req);

    if (!tempUser) {
      res.status(403).json("Not Authorized");
    } else {
      try {
        // access Token 발급
        const accessToken = jwt.sign(
          {
            username: tempUser.userame,
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
            username: tempUser.username,
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
  }
};

const accessToken = async (req, res) => {
  console.log("reqqqqqqqqq", req.body);
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
        username: data.username,
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
      httpOnly: true,
    });

    res.status(200).json("Access Token Recreated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginSuccess = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const tempUser = await test({ body: { inputId: data.userId } });
    global.userId = tempUser.userId;
    global.userName = tempUser.userName;
  } catch (error) {
    try {
      const token = req.cookies.refreshToken;
      const data = jwt.verify(token, process.env.REFRECH_SECRET);
      const tempUser = await test({ body: { inputId: data.userId } });
      // access Token 새로 발급
      const accessToken = jwt.sign(
        {
          username: tempUser.username,
          userId: tempUser.userId,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "10m",
          issuer: "About Tech",
        }
      );

      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: true,
      });

      global.userId = data.userId;
      global.userName = data.userName;
    } catch (error) {}
  }
  next();
};

const check = (req, res) => {
  if (global.userId) {
    res.status(200).json({ userId: global.userId, userName: global.userName });
  } else {
    res.status(400).send("로그인 되어있지 않습니다.");
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    global.userId = "";
    global.userName = "";
    res.status(200).json("Logout Success");
  } catch (error) {
    res.status(500).json(error);
  }
};

export { login, accessToken, refreshToken, loginSuccess, logout, check };
