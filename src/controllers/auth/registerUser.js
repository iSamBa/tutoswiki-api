import { generatePassword } from "../../auth/helpers/password-utils.js";

export default function makeRegisterUserController({ registerUser }) {
  return async function registerUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const registredUser = await registerUser(
        httpRequest.body,
        generatePassword
      );

      return {
        headers,
        statusCode: 201,
        body: {
          ok: true,
          message: "User was successfully registred",
          user: registredUser._doc,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        headers,
        ok: false,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  };
}
