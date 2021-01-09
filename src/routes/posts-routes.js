import express from "express";
import bodyParser from "body-parser";
import postsController from "../controllers/post/index.js"
import makeExpressCallback from "../helpers/express-callback.js"

const { addPostController, deletePostController, updatePostController, listPostsController, getPostController } = postsController;

const postsRouter = express.Router();

postsRouter.use(bodyParser.urlencoded({ extended: true }));
postsRouter.use(bodyParser.json());

postsRouter.get("/", makeExpressCallback(listPostsController))
postsRouter.post("/", makeExpressCallback(addPostController));
postsRouter.get("/:id", makeExpressCallback(getPostController))
postsRouter.delete("/:id", makeExpressCallback(deletePostController))
postsRouter.patch("/:id", makeExpressCallback(updatePostController))

export default postsRouter;
