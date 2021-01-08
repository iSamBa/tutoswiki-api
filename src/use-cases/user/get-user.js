export default function makeGetUser({ usersDb }) {
    return async function getUserById(id) {
        return await usersDb.findById(id);
    }
}