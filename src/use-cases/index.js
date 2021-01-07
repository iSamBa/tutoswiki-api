import makeAddPost from "./post/add-post.js"
import makeDeletePost from "./post/delete-post.js"
import makeListPosts from "./post/list-posts.js"
import makeGetPostById from "./post/get-post.js"
import makeAddUser from "./user/add-user.js"
import { postsDb, usersDb } from "../db/index.js"

const addPost = makeAddPost({ postsDb })
const deletePost = makeDeletePost({ postsDb })
const listPosts = makeListPosts({ postsDb })
const getPostById = makeGetPostById({ postsDb })

const addUser = makeAddUser({ usersDb })

const postsService = Object.freeze({
    addPost,
    deletePost,
    getPostById,
    listPosts,
    addUser,
});

export default postsService;
export { addPost, addUser, listPosts, getPostById, deletePost }
