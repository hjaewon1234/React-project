import { Router } from "express";
const router = Router();
import multer from "multer";
import db from "../models/index.js";
import Users from "../models/user.js";
import Qna from "../models/Qna.js";
import Review from "../models/review.js";
import Products from "../models/product.js";
import fs from "fs";

async function setImages() {
  await fs.readdir("./Img", (err, datas) => {
    console.log(datas);
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

router.route("/productManage").post(async (req, res) => {
  const productInfo = await db.Products.findAll();

  const sliceInfo = productInfo.slice(
    req.body.number * 10,
    req.body.number * 10 + 10
  );

  sliceInfo.map((item, idx) => {
    item.img = item.img.split(",")[0];
  });
  // 이렇게 해서 sliceInfo 로 사진을 하나씩만 보내줌
  res.send(sliceInfo);
  // 원래는 페이지 정보와 페이징 내용을 같이 보내야 한다.
  // 좀더 생각을 해보자 관계형 db만 하고.
});

router.route("/productPage").post(async (req, res) => {
  let pageNum = [];

  const pagingLength = (await db.Products.findAll()).length;

  for (let i = 0; i < pagingLength / 10; i++) {
    pageNum.push(i);
  }

  res.send(pageNum);
});

router.route("/qnaInfo").post(async (req, res) => {
  const tempDbFind = await Review.findAll({
    include: [
      { model: Users, attributes: ["userId", "userName", "userImg"] },
      { model: Products, attributes: ["brand", "name", "price", "img"] },
    ],
    // include는 배열이고, 그 배열에서 뽑고싶은 관계를 맺은 데이터
    // model: 관계 맺은 테이블 명 // attributes : 가지고 오고 싶은 칼럼명
    // include는 배열이기 때문에 여러가지 관계를 한번에 가져오는 방법은
    // 위와 같다.
  });
  // findAll로 찾은 모든 정보에 User 라는 정보를 새로 가져옴
  // 가져오는 정보는 내가 attributes에 적어둔 내용을 가져옴
  // console.log(
  //   tempDbFind[0].dataValues.User.dataValues,
  //   tempDbFind[1].dataValues.User.dataValues
  // );
  // dataValues.User.dataValues 는 안에 있는 User에 대한 정보를 얻는 방법임.
  const sliceQnaInfo = tempDbFind.slice(
    req.body.number * 10,
    req.body.number * 10 + 10
  );

  // 이런 형식으로 보내면 User 라는 칼럼으로 userId, userName이 객체로 들어간다.
  res.send(sliceQnaInfo);
});

router.route("/qnaPage").post(async (req, res) => {
  let qnapageNum = [];

  const qnapagingLength = (await db.Review.findAll()).length;

  for (let i = 0; i < qnapagingLength / 10; i++) {
    qnapageNum.push(i);
  }

  res.send(qnapageNum);
});

router.route("/answerQna").post(async (req, res) => {
  await db.Qna.update(
    {
      qnaAnswer: req.body.qnaAnswer,
      qnaState: true,
    },
    {
      where: { id: req.body.id },
    }
  );
  // 지금 한게 db 수정 하는 방식임. id로 찾아서 qnaAnswer 칼럼을 현재 받은 걸로 바꿔주는거임
  // 지금 또 수정해야되는 부분은 qnaAnswer의 값이 있으면 상태를 바꿔준다.
  res.send(req.body);
});

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "./upload/");
//     },
//     filename: (req, file, cb) => {
//       cb(null, new Date().valueOf + Path2D.extname(file.originalname));
//     },
//   }),
// });

// router.route("/uploadFile").post(upload.array("img", 4), (req, res) => {
//   // console.log(req.file);

//   res.send("에라이모르겟다.");
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Img/");
    // destination은 저장할 경로
  },
  filename: (req, file, cb) => {
    const newFileName = (file.originalname = Buffer.from(
      file.originalname,
      "latin1"
    ).toString("utf8"));
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });
// storage는 저장할 공간에 대한 정보, 디스크나 메모리 저장 기능

router.route("/uploadFile").post(upload.array("file", 4), async (req, res) => {
  let joinArr = [];
  for (let i = 0; i < req.files.length; i++) {
    joinArr.push(req.files[i].originalname);
  }
  console.log(req.body);

  const intPrice = parseInt(req.body.price);
  const tempProduct = await db.Products.create({
    name: req.body.name,
    price: intPrice,
    brand: req.body.brand,
    description: req.body.description,
    img: joinArr.join(),
  });

  const tempCa = await db.Category.findOne({
    where: {
      id: req.body.smallsort,
    },
  });
  console.log(tempCa);
  tempCa.addProducts(tempProduct);

  fs.stat("./Img", (error, stats) => console.log("파일크기", stats.size));

  // fs.writeFile("./Img", req.files, (err) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send("서버오류빼애애애애애애애애애애애액");
  //   }
  //   res.send("서버오류없음");
  // });

  // async function setImagesMake(files) {
  //   await fs.readdir("./Img", (err, datas) => {
  //     for (let i = 0; i < files.length; i++) {
  //       if (!datas.includes(files[i].originalname)) {
  //         router.get(
  //           `/download${encodeURI(files[i].originalname)}`,
  //           (req, res) => {
  //             fs.readFile("./Img/" + files[i], (err, data) => {
  //               res.writeHead(200, { "Content-Type": "text/html" });
  //               res.end(data);
  //             });
  //           }
  //         );
  //       }
  //     }
  //   });
  // }

  res.send("작업완료");
});

// fs를 봐야댄다..
// 여러개 파일을 어떻게 받을 지 // 변환 // => db에 쑤셔박고 // => 관계
// 파일들의 이름을 어떻게 설정 해 줄 지

export default router;
