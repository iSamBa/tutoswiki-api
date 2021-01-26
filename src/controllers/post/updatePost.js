export default function makeUpdatePostController({ updatePost }) {
  return async function updatePostController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const updatedPost = await updatePost({
        id: httpRequest.params.id,
        ...httpRequest.body,
      });
      return {
        headers,
        statusCode: updatedPost.updatedCount === 0 ? 404 : 200,
        body:
          updatedPost.updatedCount === 0
            ? { ok: false, message: "Post to update was not found" }
            : { ok: true, updatedPost },
      };
    } catch (error) {
      console.log(error);
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
