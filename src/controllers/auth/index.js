import makeRegisterUserController from "./registerUser.js";
import registerUser from "../../use-cases/auth/index.js";

const registerUserController = makeRegisterUserController({ registerUser });

export default registerUserController;
