export default function makeDeleteUserController({ deleteUser }) {
  return async function deleteUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const deletedUser = await deleteUser(httpRequest.params.id);
      return {
        headers,
        statusCode: deletedUser.deletedCount === 0 ? 404 : 200,
        body:
          deletedUser.deletedCount === 0
            ? { ok: false, message: "User to delete was not found" }
            : { ok: true, deletedUser },
      };
    } catch (error) {
      console.log(error.message);
      return {
        headers,
        statusCode: 400,
        body: {
          ok: false,
          message: error.message,
        },
      };
    }
  };
}
