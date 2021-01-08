export default function makeUpdatePostController({ updatePostUseCase }) {
    return async function updatePost(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const updated = await updatePostUseCase({ id: httpRequest.params.id, ...httpRequest.body });
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