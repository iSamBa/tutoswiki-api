import makeAddPost from "./add-post.js"
import makeDeletePost from "./delete-post.js"
import makeListPosts from "./list-posts.js"
import makeGetPostById from "./get-post.js"
import makeAddUser from "./add-user.js"
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
