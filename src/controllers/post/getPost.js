export default function makeGetPostController({ getPostUseCase }) {
    return async function getPost(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const retrieved = await getPostUseCase(httpRequest.params.id);
            return {
                headers,
                statusCode: 200,
                body: { retrieved }
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