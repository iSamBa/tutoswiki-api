export default function makeAddPostController({ addPost }) {
  return async function addPostController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await addPost(httpRequest.body);
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
