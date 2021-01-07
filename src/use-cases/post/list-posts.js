export default function makeListPosts({ postsDb }) {
    return async function listPosts(publishedOnly) {
        return await postsDb.findAll(publishedOnly);
    }
}