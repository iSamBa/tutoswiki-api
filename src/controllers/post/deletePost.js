export default function makeDeletePostController({ deletePost }) {
  return async function deletePostController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await deletePost(httpRequest.params.id);
      return {
        headers,
        statusCode: data.deletedCount === 0 ? 404 : 200,
        body:
          data.deletedCount === 0
            ? { ok: false, message: "Post to delete was not found" }
            : { ok: true, data },
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
