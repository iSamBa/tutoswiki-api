export default function makeDeleteUserController({ deleteUser }) {
    return async function deleteUserController(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const deleted = await deleteUser(httpRequest.params.id);
            return {
                headers,
                statusCode: deleted.deletedCount === 0 ? 404 : 200,
                body: { deleted }
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