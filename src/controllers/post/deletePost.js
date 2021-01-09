export default function makeDeletePostController({ deletePost }) {
    return async function deletePostController(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const deleted = await deletePost(httpRequest.params.id);
            return {
                headers,
                statusCode: deleted.deletedCount === 0 ? 404 : 200,
                body: { deleted }
            }

        } catch (error) {
            console.log(error);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}