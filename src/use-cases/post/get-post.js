export default function makeGetPostById({ postsDb }) {
    return async function getPostById(id) {
        return await postsDb.findById(id);
    }
}