export default function makeGetPostController({ getPost }) {
  return async function getPostController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const post = await getPost(httpRequest.params.id);
      return {
        headers,
        statusCode: 200,
        body: { ok: true, post },
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
