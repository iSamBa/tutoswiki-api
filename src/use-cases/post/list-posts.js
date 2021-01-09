export default function makeListPosts({ postsDb }) {
    return async function listPosts(publishedOnly) {
        return postsDb.findAll(publishedOnly);
    }
}