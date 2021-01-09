import postsService from "../../use-cases/post/index.js";

import makeAddPostController from "./addPost.js";
import makeDeletePostController from "./deletePost.js";
import makeListPostsController from "./listPosts.js";
import makeUpdatePostController from "./updatePost.js";
import makeGetPostController from "./getPost.js"

const { addPost, deletePost, getPost, updatePost, listPosts } = postsService

const addPostController = makeAddPostController({ addPost })
const deletePostController = makeDeletePostController({ deletePost })
const getPostController = makeGetPostController({ getPost })
const updatePostController = makeUpdatePostController({ updatePost })
const listPostsController = makeListPostsController({ listPosts })

const postsController = {
    addPostController,
    deletePostController,
    getPostController,
    updatePostController,
    listPostsController
};

export default postsController;
export { addPostController, deletePostController, getPostController, updatePostController, listPostsController };
