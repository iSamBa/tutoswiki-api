import makeAddPost from "./add-post.js"
import makeDeletePost from "./delete-post.js"
import makeListPosts from "./list-posts.js"
import makeGetPostById from "./get-post.js"
import { postsDb } from "../../db/index.js"

const addPost = makeAddPost({ postsDb })
const deletePost = makeDeletePost({ postsDb })
const listPosts = makeListPosts({ postsDb })
const getPostById = makeGetPostById({ postsDb })


const postsService = Object.freeze({
    addPost,
    deletePost,
    getPostById,
    listPosts,
});

export default postsService;
export { addPost, listPosts, getPostById, deletePost }
