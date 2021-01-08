export default function makeCreatePostController({ addPostUseCase }) {
    return async function createPost(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const addedPost = await addPostUseCase(httpRequest.body);
            return {
                headers,
                statusCode: 201,
                body: { addedPost }
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