import { Router } from "express";
import Category from "../models/category.js";
const router = Router();

import db from "../models/index.js";

const tables = [
  {
    name: "크리스마스 트리 오너먼트 볼 장식 15종",
    price: 2100,
    brand: "플라워트리",
    description: `플라워트리의 크리스마스 준비는 수박이 달고 맛있는 여름부터 시작해요.
    기분 좋아야 하는 특별한날 기대에 못미치는 상품을 받으면 안돼서에요
    상품 한개 한개 오랜 시간을 두고 꼼꼼히 선택했어요.
    누적된 피드백과 의견 주신 내용을 최대한 반영하려 많은 노력도 담았지요.`,
    img: "treeBall1",
  },
];

// db.Products.findAll().then((data) => {
//   if (data.length === 0) {
//     db.Products.create(tables[0]);
//   }
// });

router.route("/").post((req, res) => {
  res.send(req.body);
});
// /api/product/
router.route("/getProducts").post((req, res) => {
  db.Products.findAll().then((data) => {
    // console.log(data[0].dataValues);
    const sendData = [];
    data.map((item, index) => {
      if (
        index < req.body.boxIdx - 1 ||
        index >= req.body.boxIdx + req.body.idx - 1
      )
        return;
      return sendData.push(item.dataValues);
    });
    res.send(sendData);
  });
});

router.route("/getProductFromId").post((req, res) => {
  db.Products.findOne({ where: { id: req.body.productId } }).then((data) => {
    res.send(data.dataValues);
  });
});

router.route("/getAllProducts").post((req, res) => {
  db.Products.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.route("/getProductItem").post((req, res) => {
  // db.Products.findAll()
  db.Products.findOne({
    where: { id: req.body.id },
    include: [{ model: Category }],
  })
    .then((data) => {
      res.send(data);
    })
    // .then((data) => {
    //   console.log(data.dataValues.category);
    //   return data.dataValues;
    // })
    // .then((data) => {
    //   db.Category.findOne({ where: { id: data.category } }).then(
    //     (categoryData) => {
    //       res.send({ ...data, categoryData });
    //     }
    //   );
    // })
    .catch((err) => {
      console.error(err);
      res.end();
    });
});

// router.route("/getProductItem").post(async (req, res) => {
//   console.log(req.body);
//   try {
//     const getItem = await db.Products.findAll();
//     res.send(getItem);
//   } catch (err) {
//     console.error(err);
//     res.end();
//   }
// });

router.route("/getTopten").post(async (req, res) => {
  db.Search.findAll({ order: [["count", "DESC"]] }).then((data) => {
    const countAry = [];

    const myPromise = new Promise((resolve, reject) => {
      data.map(async (item) => {
        const curItemName = await db.Products.findOne({
          where: { id: item.dataValues.products_id },
        });
        countAry.push(curItemName.name);
        if (countAry.length >= 10) {
          resolve(countAry);
        }
      });
    });
    myPromise.then((data) => {
      let countAry = data;
      const topTenAry = [];

      db.TopTen.findAll()
        .then((data) => {
          for (let i = 0; i < 10; ++i) {
            topTenAry.push({
              productName: countAry[i] || "",
              rankTableData: data[i].dataValues,
            });
          }
          return topTenAry;
        })
        .then((topAry) => {
          const topAryPromise = new Promise((resolve, reject) => {
            let count = 0;
            topAry.map((item, index) => {
              db.TopTen.update(
                { productName: item.productName },
                { where: { id: index + 1 } }
              ).then(() => {
                count++;
                if (count >= 10) resolve();
              });
            });
          });
          topAryPromise.then(() => {
            res.send(topAry);
          });
        });
    });
  });
});

router.route("/reviewProduct").post(async (req, res) => {
  const user = await db.Users.findOne({
    where: { userId: req.body.userId },
  });
  const product = await db.Products.findOne({
    where: { id: req.body.productId },
  });
  const review = await db.Review.create({ text: req.body.text });
  user.addReview(review);
  product.addReview(review);
  res.send();
});

router.route("/getReviews").post(async (req, res) => {
  const productAry = [];
  let intervalId;
  const user = await db.Users.findOne({
    where: {
      userId: req.body.userId,
    },
  });
  const review = await db.Review.findAll({
    where: { users_id: user.dataValues.id },
  });
  review.map((item, index) => {
    db.Products.findOne({ where: { id: item.products_id } }).then((product) => {
      productAry.push({ product: product.dataValues, review: review[index] });
    });
  });
  intervalId = setInterval(() => {
    if (productAry.length == review.length) {
      clearInterval(intervalId);
      res.send(productAry);
    }
  }, 100);
});

router.route("/getReviewsFromProductId").post(async (req, res) => {
  let userAry = [];
  db.Review.findAll({
    include: [
      {
        model: db.Products,
      },
    ],
    where: { products_id: req.body.productId },
  }).then((data) => {
    data.map((item) => {
      db.Users.findOne({ where: { id: item.users_id } }).then((user) => {
        console.log(user.dataValues.userName);
        userAry.push({ userName: user.dataValues.userName, data: item });
        if (userAry.length == data.length) {
          res.send(userAry);
        }
      });
    });
  });
});

export default router;
