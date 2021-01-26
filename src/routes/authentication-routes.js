import express from "express";
import bodyParser from "body-parser";
import makeExpressCallback from "../helpers/express-callback.js";
import registerUserController from "../controllers/auth/index.js";
import passport from "../auth/config/passport.js";

const authenticationRouter = express.Router();

authenticationRouter.use(bodyParser.urlencoded({ extended: true }));
authenticationRouter.use(bodyParser.json());

authenticationRouter.post(
  "/register",
  makeExpressCallback(registerUserController)
);
authenticationRouter.post(
  "/login",
  passport.authenticate("local"),
  (req, res, next) => {
    res
      .status(200)
      .json({ ok: true, message: "User has been successfuly logged in" });
  }
);

authenticationRouter.post("/logout", (req, res, next) => {
  req.logout();
  res
    .status(200)
    .json({ ok: true, message: "User has been successfuly logged out" });
});

authenticationRouter.use((error, req, res, next) => {
  return res.status(401).json({ ok: false, message: error.toString() });
});

export default authenticationRouter;
