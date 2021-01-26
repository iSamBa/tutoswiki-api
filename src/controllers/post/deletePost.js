export default function makeDeletePostController({ deletePost }) {
  return async function deletePostController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const deletedPost = await deletePost(httpRequest.params.id);
      return {
        headers,
        statusCode: deletedPost.deletedCount === 0 ? 404 : 200,
        body:
          deletedPost.deletedCount === 0
            ? { ok: false, message: "Post to delete was not found" }
            : { ok: true, deletedPost },
      };
    } catch (error) {
      console.log(error);
      return {
        headers,
        statusCode: 400,
        body: {
          ok: true,
          message: error.message,
        },
      };
    }
  };
}
