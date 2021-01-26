export default function makeAddPostController({ addPost }) {
  return async function addPostController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const addedPost = await addPost(httpRequest.body);
      return {
        headers,
        statusCode: 201,
        body: { ok: true, addedPost },
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
