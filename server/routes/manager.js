import { Router } from "express";
const router = Router();
import multer from "multer";
import db from "../models/index.js";
import Users from "../models/user.js";
import Qna from "../models/Qna.js";
import Products from "../models/product.js";

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
  const tempDbFind = await Qna.findAll({
    include: [
      { model: Users, attributes: ["userId", "userName"] },
      { model: Products, attributes: ["brand", "name", "price"] },
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
  console.log(sliceQnaInfo[0].dataValues);
  console.log(tempDbFind[0].dataValues);
  // 이런 형식으로 보내면 User 라는 칼럼으로 userId, userName이 객체로 들어간다.
  res.send(sliceQnaInfo);
});

router.route("/qnaPage").post(async (req, res) => {
  let qnapageNum = [];

  const qnapagingLength = (await db.Qna.findAll()).length;

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

export default router;
