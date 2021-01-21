export default function makeListPostsController({ listPosts }) {
    return async function listPostsController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const posts = await listPosts();
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