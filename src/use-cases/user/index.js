import makeAddUser from "./add-user.js"
import makeDeleteUser from "./delete-user.js"
import makeListUsers from "./list-users.js"
import makeUpdateUser from "./update-user.js"
import makeGetUser from "./get-user.js"
import makeRegisterUser from "./register-user.js"
import { usersDb } from "../../db/index.js"

const addUser = makeAddUser({ usersDb })
const deleteUser = makeDeleteUser({ usersDb })
const updateUser = makeUpdateUser({ usersDb })
const listUsers = makeListUsers({ usersDb })
const getUser = makeGetUser({ usersDb })
const registerUser = makeRegisterUser({ usersDb });


const usersService = Object.freeze({
    addUser,
    deleteUser,
    updateUser,
    listUsers,
    getUser,
    registerUser

});

export default usersService;

export {
    addUser,
    deleteUser,
    updateUser,
    listUsers,
    getUser,
    registerUser
}
