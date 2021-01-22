export default function makeListUsersController({ listUsers }) {
    return async function listUsersController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const Users = await listUsers(httpRequest.body);
            return {
                headers,
                statusCode: 201,
                body: { Users }
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