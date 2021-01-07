export default function buildMakePost({ Id }) {
    return function makePost({
        id = Id.createId(),
        createdAt = Date.now(),
        updatedAt = Date.now(),
        author_id,
        title,
        content,
        published = false

    } = {}) {

        if (!Id.isValid(id)) {
            throw new Error("Post Id is not valid");
        }

        if (!Id.isValid(author_id)) {
            throw new Error("Author Id is not valid");
        }

        if (!title || title.length < 6) {
            throw new Error("Title must contain at least 6 characters");
        }

        if (!content || content.length < 10) {
            throw new Error("Content must contain at least 10 characters");
        }

        return Object.freeze({
            getPostId: () => id,
            getAuthorId: () => author_id,
            getTitle: () => title,
            getContent: () => content,
            getPostCreatedAt: () => createdAt,
            getPostUpdatedAt: () => updatedAt,
            isPublished: () => published,
            publish: () => {
                published = true;
            },
            unpublish: () => {
                published = false;
            }
        })
    }
}