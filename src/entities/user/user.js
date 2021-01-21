export default function buildMakeUser({ Id }) {
    return function makeUser({
        id = Id.createId(),
        createdAt = Date.now(),
        updatedAt = Date.now(),
        firstName,
        lastName,
        userName,
        email,
        password
    } = {}) {
        if (!Id.isValid(id)) {
            throw new Error("Id is not valid");
        }
        if (!userName || userName.length < 6) {
            throw new Error("Display name must at least contain 6 characters")
        }
        if(!password || password.length < 6) {
            throw new Error("Password must at least contain 6 characters")
        }

        return Object.freeze({
            getUserId: () => id,
            getUserCreatedAt: () => createdAt,
            getUserUpdatedAt: () => updatedAt,
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getUserName: () => userName,
            getEmail: () => email,
            getPassword:()=>password
        })

    }
}