import { Router } from "express";
const router = Router();
import user from "./user.js";
import product from "./product.js";
import db from "../models/index.js";
import fs from "fs";
import login from "./login.js";

router.use("/", (req, res, next) => {
  console.log("routes/index.js : " + req.url);
  next();
});

router.use("/user", user);
router.use("/product", product);

// db에 아무 정보가 없을 시 첫 아이템을 db에 넣어준다.

const products = [
  {
    name: "크리스마스 트리 오너먼트 볼 장식 15종",
    price: 2100,
    brand: "플라워트리",
    description: `플라워트리의 크리스마스 준비는 수박이 달고 맛있는 여름부터 시작해요.
    기분 좋아야 하는 특별한날 기대에 못미치는 상품을 받으면 안돼서에요
    상품 한개 한개 오랜 시간을 두고 꼼꼼히 선택했어요.
    누적된 피드백과 의견 주신 내용을 최대한 반영하려 많은 노력도 담았지요.`,
    img: "treeBall1,treeBall2,treeBall3",
  },
];

const users = [
  {
    userId: "aaa",
    userPw: "aaa",
    userName: "내가유저다",
    phone: "010-1234-5678",
    address: "천호동",
  },
];

// db.Users.findAll().then((data) => {
//   if (data.length === 0) {
//     db.Users.create(users[0]);
//   }
// });

// db.Products.findAll().then((data) => {
//   console.log(data);
//   if (data.length === 0) {
//     db.Products.create(products[0]);
//   }
// });

// 관계 맺음
// db.Users.findOne({ where: { id: 1 } }).then((user) => {
//   db.Products.findOne({ where: { id: 1 } }).then((product) => {
//     user.addProducts(product);
//     product.addUsers(user);
//   });
// });

// 이미지 등록
async function setImages() {
  await fs.readdir("./Img", (err, datas) => {
    for (let i = 0; i < datas.length; ++i) {
      router.get(`/download${encodeURI(datas[i])}`, (req, res) => {
        fs.readFile("./Img/" + datas[i], (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      });
    }
  });
}
setImages();

router.post("/getImages", (req, res) => {
  fs.readdir("./Img", (err, datas) => {
    res.send(datas);
  });
});

// 카테고리 등록
// fs.readFile("./data/category.json", "utf-8", function (err, data) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     JSON.parse(data).forEach((item) => {
//       try {
//         db.Category.create(item);
//       } catch (err) {
//         console.error(err);
//       }
//     });
//   }
// });

// 제품 등록
// fs.readFile("./data/product.json", "utf-8", function (err, data) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     JSON.parse(data).forEach((item) => {
//       try {
//         db.Category.findOne({
//           where: { smallsort: item.category?.smallsort },
//         }).then((data) => {
//           if (!data) {
//             console.log("왜없음?", item);
//           } else {
//             console.log(data.id, item.img);
//             db.Products.create({
//               name: item.name,
//               price: item.price,
//               brand: item.brand,
//               description: item.description,
//               category: data.id,
//               img: item.img,
//             });
//           }
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     });
//   }
// });
router.use("/login", login);

export default router;
