export default function makeUpdatePostController({ updatePost }) {
    return async function updatePostController(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const updated = await updatePost({ id: httpRequest.params.id, ...httpRequest.body });
            return {
                headers,
                statusCode: updated.updatedCount === 0 ? 404 : 200,
                body: { updated }
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