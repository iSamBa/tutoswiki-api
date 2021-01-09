export default function makeCreateUserController({ addUser }) {
    return async function addUserController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const addedUser = await addUser(httpRequest.body);
            return {
                headers,
                statusCode: 201,
                body: { addedUser }
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