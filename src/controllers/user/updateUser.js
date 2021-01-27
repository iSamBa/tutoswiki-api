import { Hash } from "crypto";

export default function makeUpdateUserController({ updateUser }) {
  return async function updateUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await updateUser({
        id: httpRequest.params.id,
        ...httpRequest.body,
      });
      return {
        headers,
        statusCode: data.updatedCount === 0 ? 404 : 200,
        body:
          data.updatedCount === 0
            ? { ok: false, message: "User to update was not found" }
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
