export default function makeRegisterUserController({ utils }) {
  return async function registerUserController(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { registerUser, userModel, passwordGenerator } = utils;
      const { salt, hash } = passwordGenerator(httpRequest.body.password);
      const user = await registerUser(httpRequest.body);
      const { password, ...rest } = user;
      const newUser = new userModel({
        ...rest,
        hash: hash,
        salt: salt,
      });

      const registredUser = await newUser.save();

      return {
        headers,
        statusCode: 201,
        body: {
          message: "User was successfully registred",
          user: registredUser._doc,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  };
}
