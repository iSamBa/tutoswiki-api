export default function makeRegisterUserController({ registerUser }) {
    return async function registerUserController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const registredUser = await registerUser(httpRequest.body);
            return {
                headers,
                statusCode: 201,
                body: { registredUser }
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