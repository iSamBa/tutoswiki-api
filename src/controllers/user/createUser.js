export default function makeCreateUserController({ addUser }) {
  return async function addUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await addUser(httpRequest.body);
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
