import usersService from "../../use-cases/user/index.js";

import makeCreateUserController from "./createUser.js";
import makeDeleteUserController from "./deleteUser.js";
import makeListUsersController from "./listUsers.js";
import makeUpdateUserController from "./updateUser.js";
import makeGetUserController from "./getUser.js"
import makeRegisterUserController from "./registerUser.js"

const { addUser, deleteUser, getUser, updateUser, listUsers, registerUser } = usersService

const addUserController = makeCreateUserController({ addUser })
const deleteUserController = makeDeleteUserController({ deleteUser })
const getUserController = makeGetUserController({ getUser })
const updateUserController = makeUpdateUserController({ updateUser })
const listUsersController = makeListUsersController({ listUsers })
const registerUserController = makeRegisterUserController({ registerUser })

const UsersController = { addUserController, deleteUserController, getUserController, updateUserController, listUsersController, registerUserController };

export default UsersController;
export { addUserController, deleteUserController, getUserController, updateUserController, listUsersController, registerUserController };
