export default function makeDeletePost({ postsDb }) {
    return async function deletePost(id) {
        return await postsDb.remove(id);
    }
}