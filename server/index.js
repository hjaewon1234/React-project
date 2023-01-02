import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import socket from "./socket/socket.js";
import {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
  check,
} from "./controller/index.js";
import routes from "./routes/index.js";

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
    credentials: true,
  })
);
app.set("port", process.env.PORT || 8080);

app.use("/api", routes);
app.use("/", loginSuccess);
app.get("/check", check);
app.post("/login", login);
app.get("/accesstoken", accessToken);
app.get("/refreshtoken", refreshToken);
app.post("/logout", logout);

import model from "./models/index.js";

model.sequelize
  .sync({ force: false })
  .then(() => {})
  .catch((err) => {});

const server = app.listen(process.env.PORT, () => {});

socket(server);
