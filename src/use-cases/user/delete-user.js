export default function makeDeleteUser({ usersDb }) {
    return async function deleteUser(id) {
        if (!id) {
            throw new Error('You must supply an id.')
        }
        return usersDb.remove(id);
    }
}