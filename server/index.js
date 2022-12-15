import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
} from "./controller/index.js";
import routes from "./routes/index.js";

import multer from "multer";
const upload = multer({ dest: "./upload" });

const app = express();
dotenv.config();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    // methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.set("port", process.env.PORT || 8080);

app.use("/api", routes);
app.post("/login", login);
app.get("/accesstoken", accessToken);
app.get("/refreshtoken", refreshToken);
app.get("/login/success", loginSuccess);
app.post("/logout", logout);

// region: db;
import model from "./models/index.js";

model.sequelize
  .sync({ force: false })
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });
// region: db-end

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
