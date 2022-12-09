import express from "express";
import session from "express-session";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/index.js";
const app = express();

dotenv.config();
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(cors({ credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

app.set("port", process.env.PORT || 8080);

app.use("/api", routes);

// region: db
import model from "./models/index.js";

model.sequelize
  .sync({ force: false })
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });
// region: db-end

app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});
