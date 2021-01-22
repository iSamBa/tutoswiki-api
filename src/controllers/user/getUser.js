export default function makeGetUserController({ getUser }) {
    return async function getUserController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const retrieved = await getUser(httpRequest.params.id);
            return {
                headers,
                statusCode: 200,
                body: { retrieved }
            }

        } catch (error) {
            console.log(error.message);
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