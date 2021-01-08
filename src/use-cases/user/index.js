import makeAddUser from "./add-user.js"
import { usersDb } from "../../db/index.js"

const addUser = makeAddUser({ usersDb })


const usersService = Object.freeze({
    addUser,

});

export default usersService;
export { addUser }
