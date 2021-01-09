export default function makeAddPostController({ addPost }) {
    return async function addPostController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const added = await addPost(httpRequest.body);
            return {
                headers,
                statusCode: 201,
                body: { added }
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