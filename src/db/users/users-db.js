export default function makeUsersDb({ userModel }) {
    return Object.freeze({
        // findAll,
        // findById,
        insert,
        // remove,
        // update
    })

    async function insert(userInfo) {
        const userInstance = userModel(userInfo);
        return await userInstance.save();

    }
}