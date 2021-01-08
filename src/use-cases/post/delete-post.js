export default function makeDeletePost({ postsDb }) {
    return async function deletePost(id) {
        if (!id) {
            throw new Error('You must supply an id.')
        }
        return await postsDb.remove(id);
    }
}