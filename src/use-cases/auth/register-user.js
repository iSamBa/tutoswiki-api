import makeUser from "../../entities/user/index.js";

export default function makeRegisterUser() {
  return async function registerUser(userInformation) {
    const user = makeUser(userInformation);
    return {
      _id: user.getUserId(),
      userName: user.getUserName(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      password: user.getPassword(),
      createdAt: user.getUserCreatedAt(),
      updatedAt: user.getUserUpdatedAt(),
    };
  };
}
