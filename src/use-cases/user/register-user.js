import makeUser from "../../entities/user/index.js"

export default function makeRegisterUser({ usersDb }) {
    return async function registerUser(userInformation) {
        const user = makeUser(userInformation);
        return usersDb.register({
            _id: user.getUserId(),
            username: user.getUserName(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: user.getPassword(),
            createdAt: user.getUserCreatedAt(),
            updatedAt: user.getUserUpdatedAt()
        });
    }
}
