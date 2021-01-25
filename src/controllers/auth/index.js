import { userModel } from "../../db/index.js";
import makeRegisterUserController from "./registerUser.js";
import passwordUtilService from "../../helpers/password-utils.js";
import registerUser from "../../use-cases/auth/index.js";

const utils = {
  registerUser: registerUser,
  userModel: userModel,
  passwordGenerator: passwordUtilService.generatePassword,
};

const registerUserController = makeRegisterUserController({
  utils,
});

export default registerUserController;
