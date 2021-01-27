export default function makeListUsersController({ listUsers }) {
  return async function listUsersController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await listUsers(httpRequest.body);
      return {
        headers,
        statusCode: 201,
        body: { ok: true, data },
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
