import { Router } from "express";

import user from "./user.js";
import product from "./product.js";
import manager from "./manager.js";
import search from "./search.js";
import fs from "fs";
import login from "./login.js";
import community from "./community.js";
import userPage from "./userPage.js";
import order from "./order.js";
import readMore from "./readMore.js";
import db from "../models/index.js";
import cart from "./cart.js";

const router = Router();

router.use("/user", user);
router.use("/product", product);
router.use("/manager", manager);
router.use("/search", search);
router.use("/community", community);
router.use("/order", order);
router.use("/readmore", readMore);
router.use("/cart", cart);
router.use("/userPage", userPage);

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

async function setTopTen() {
  db.TopTen.findAll().then(async (data) => {
    if (data.length == 0) {
      for (let i = 0; i < 10; ++i) {
        await db.TopTen.create({ rank: i + 1, productName: i + 1 });
      }
    }
  });
}
setTopTen();

router.post("/getImages", (req, res) => {
  fs.readdir("./Img", (err, datas) => {
    res.send(datas);
  });
});

function setProduct() {
  db.Products.findAll().then((data) => {
    if (data.length == 0) {
      fs.readFile("./data/product.json", "utf-8", function (err, data) {
        if (err) {
        } else {
          JSON.parse(data).forEach((item) => {
            try {
              db.Category.findOne({
                where: { smallsort: item.category.smallsort },
              }).then((data) => {
                if (!data) {
                } else {
                  db.Products.create({
                    name: item.name,
                    price: item.price,
                    brand: item.brand,
                    description: item.description,
                    category: data.id,
                    img: item.img,
                  }).then((product) => {
                    data.addProducts(product);
                  });
                }
              });
            } catch (err) {}
          });
        }
      });
    }
  });
}

function setCategory() {
  db.Category.findAll().then((data) => {
    if (data.length == 0) {
      fs.readFile("./data/category.json", "utf-8", function (err, data) {
        if (err) {
        } else {
          const curJsonData = JSON.parse(data);
          let count = 0;
          curJsonData.forEach((item) => {
            try {
              db.Category.create(item).then(() => {
                count++;
              });
            } catch (err) {}
          });

          let intervalId = setInterval(() => {
            if (count >= curJsonData.length) {
              clearInterval(intervalId);
              setProduct();
            }
          }, 100);
        }
      });
    }
  });
}
setCategory();

const productIdAry = [30, 31, 32, 37, 45, 46, 33, 38, 39, 42, 44];
function setSearch() {
  db.Search.findAll().then((data) => {
    if (data.length == 0) {
      try {
        productIdAry.map((item) => {
          db.Products.findOne({ where: { id: item } }).then((product) => {
            db.Search.create({ count: 0 }).then((search) => {
              product.addSearch(search);
            });
          });
        });
      } catch {}
    }
  });
}
// setSearch();

router.use("/login", login);

export default router;
