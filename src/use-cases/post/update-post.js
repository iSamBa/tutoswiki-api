import makePost from "../../entities/post/index.js"

export default function makeUpdatePost({ postsDb }) {
    return async function updatePost({ id, ...inputData }) {

        if (!id) {
            throw new Error('You must supply an id.')
        }

        const postToUpdate = await postsDb.findById(id);

        if (!postToUpdate) {
            throw new Error("The post to update was not found")
        }
        const newPost = makePost({ ...postToUpdate._doc, ...inputData });

        return postsDb.update(id, {
            title: newPost.getTitle(),
            content: newPost.getContent(),
            updatedAt: Date.now()
        });
    }
}