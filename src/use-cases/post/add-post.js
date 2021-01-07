import makePost from "../../entities/post/index.js"

export default function makeAddPost({ postsDb }) {
    return async function addPost(postInformation) {
        const post = makePost(postInformation)
        return postsDb.insert({
            _id: post.getPostId(),
            author_id: post.getAuthorId(),
            title: post.getTitle(),
            content: post.getContent(),
            published: post.isPublished(),
            createdAt: post.getPostCreatedAt(),
            updatedAt: post.getPostUpdatedAt(),
        });
    }
}