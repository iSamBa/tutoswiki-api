export default function makeListPostsController({ listPosts }) {
  return async function listPostsController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await listPosts();
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
