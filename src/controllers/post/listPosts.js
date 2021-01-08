export default function makeListPostsController({ listPostsUseCase }) {
    return async function listPosts(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const posts = await listPostsUseCase(httpRequest.body);
            return {
                headers,
                statusCode: 201,
                body: { posts }
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