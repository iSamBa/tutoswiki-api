import usersService from "../../use-cases/user/index.js";

import makeCreateUserController from "./createUser.js";
import makeDeleteUserController from "./deleteUser.js";
import makeListUsersController from "./listUsers.js";
import makeUpdateUserController from "./updateUser.js";
import makeGetUserController from "./getUser.js"

const { addUser, deleteUser, getUser, updateUser, listUsers } = usersService

const addUserController = makeCreateUserController({ addUser })
const deleteUserController = makeDeleteUserController({ deleteUser })
const getUserController = makeGetUserController({ getUser })
const updateUserController = makeUpdateUserController({ updateUser })
const listUsersController = makeListUsersController({ listUsers })

const UsersController = { addUserController, deleteUserController, getUserController, updateUserController, listUsersController };

export default UsersController;
export { addUserController, deleteUserController, getUserController, updateUserController, listUsersController };
