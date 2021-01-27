export default function makeListUsersController({ listUsers }) {
  return async function listUsersController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const users = await listUsers(httpRequest.body);
      return {
        headers,
        statusCode: 201,
        body: { ok: true, users },
      };
    } catch (error) {
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
