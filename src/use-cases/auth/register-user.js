import makeUser from "../../entities/user/index.js";

export default function makeRegisterUser({ userModel }) {
  return async function registerUser(userInformation, passwordGenerator) {
    const user = makeUser(userInformation);
    const { salt, hash } = passwordGenerator(user.getPassword());
    const userInstance = new userModel({
      _id: user.getUserId(),
      userName: user.getUserName(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      salt: salt,
      hash: hash,
      createdAt: user.getUserCreatedAt(),
      updatedAt: user.getUserUpdatedAt(),
    });
    return userInstance.save();
  };
}
