export default function makeGetUserController({ getUser }) {
  return async function getUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const user = await getUser(httpRequest.params.id);
      return {
        headers,
        statusCode: 200,
        body: { ok: true, user },
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
