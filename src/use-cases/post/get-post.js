export default function makeGetPost({ postsDb }) {
    return async function getPostById(id) {
        return await postsDb.findById(id);
    }
}