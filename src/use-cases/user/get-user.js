export default function makeGetUser({ usersDb }) {
    return async function getUserById(id) {
        return usersDb.findById(id);
    }
}