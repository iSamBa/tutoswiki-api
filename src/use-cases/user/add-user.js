import makeUser from "../../entities/user/index.js";

export default function makeAddUser({ usersDb }) {
  return async function addUser(userInformation) {
    const user = makeUser(userInformation);
    return usersDb.insert({
      _id: user.getUserId(),
      userName: user.getUserName(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      createdAt: user.getUserCreatedAt(),
      updatedAt: user.getUserUpdatedAt(),
      isAdmin: user.isAdmin(),
    });
  };
}
