import express from "express";
import bodyParser from "body-parser";
import usersController from "../controllers/user/index.js"
import makeExpressCallback from "../helpers/express-callback.js"
import usersService from "../use-cases/user/index.js";

const { addUserController, deleteUserController, updateUserController, listUsersController, getUserController, registerUserController } = usersController;

const usersRouter = express.Router();

usersRouter.use(bodyParser.urlencoded({ extended: true }));
usersRouter.use(bodyParser.json());

usersRouter.get("/", makeExpressCallback(listUsersController))
usersRouter.post("/", makeExpressCallback(addUserController));
usersRouter.get("/:id", makeExpressCallback(getUserController))
usersRouter.delete("/:id", makeExpressCallback(deleteUserController))
usersRouter.patch("/:id", makeExpressCallback(updateUserController))
usersRouter.post("/register", makeExpressCallback(registerUserController))

export default usersRouter;