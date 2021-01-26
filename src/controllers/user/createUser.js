export default function makeCreateUserController({ addUser }) {
  return async function addUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const addedUser = await addUser(httpRequest.body);
      return {
        headers,
        statusCode: 201,
        body: { ok: true, addedUser },
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
