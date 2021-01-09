export default function makeGetPost({ postsDb }) {
    return async function getPostById(id) {
        return postsDb.findById(id);
    }
}