import { generatePassword } from "../../auth/helpers/password-utils.js";

export default function makeRegisterUserController({ registerUser }) {
  return async function registerUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await registerUser(httpRequest.body, generatePassword);
      return {
        headers,
        statusCode: 201,
        body: {
          ok: true,
          data,
        },
      };
    } catch (error) {
      return {
        headers,
        ok: false,
        statusCode: 400,
        body: {
          ok: false,
          message: error.message,
        },
      };
    }
  };
}
