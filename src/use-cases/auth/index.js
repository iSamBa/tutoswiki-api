import makeRegisterUser from "./register-user.js";
import { userModel } from "../../db/index.js";

const registerUser = makeRegisterUser({ userModel });

export default registerUser;
