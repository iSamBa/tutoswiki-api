import postsService from "../../use-cases/post/index.js";

import makeCreatePostController from "./createPost.js";
import makeDeletePostController from "./deletePost.js";
import makeListPostsController from "./listPosts.js";
import makeUpdatePostController from "./updatePost.js";
import makeGetPostController from "./getPost.js"


const createPost = makeCreatePostController(postsService.addPost)
const deletePost = makeDeletePostController(postsService.deletePost)
const getPost = makeGetPostController(postsService.getPost)
const updatePost = makeUpdatePostController(postsService.updatePost)
const listPosts = makeListPostsController(postsService.listPosts)

const postsController = { createPost, deletePost, getPost, updatePost, listPosts };

export default postsController;
export { createPost, deletePost, getPost, updatePost, listPosts };
