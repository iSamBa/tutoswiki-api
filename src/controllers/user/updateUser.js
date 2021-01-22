export default function makeUpdateUserController({ updateUser }) {
    return async function updateUserController(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const updated = await updateUser({ id: httpRequest.params.id, ...httpRequest.body });
            return {
                headers,
                statusCode: updated.updatedCount === 0 ? 404 : 200,
                body: { updated }
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