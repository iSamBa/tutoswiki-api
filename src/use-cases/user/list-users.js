export default function makeListUsers({ usersDb }) {
    return async function listUsers() {
        return await usersDb.findAll();
    }
}