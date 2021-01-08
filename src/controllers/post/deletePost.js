export default function makeDeletePostController({ deletePostUseCase }) {
    return async function deletePost(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const deleted = await deletePostUseCase({ id: httpRequest.params.id });
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