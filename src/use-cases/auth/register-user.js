import makeUser from "../../entities/user/index.js";

//TODO: Verify if a user with the same username exists already !?

export default function makeRegisterUser({ userModel }) {
  return async function registerUser(userInformation, passwordGenerator) {
    if (userInformation.password.length < 6) {
      throw new Error("Password must have at least 6 characters.");
    }
    const existingUser = await userModel.findOne({
      userName: userInformation.username,
    });
    if (existingUser) {
      throw new Error("A user with the same username already exists");
    }
    const user = makeUser(userInformation);
    const { salt, hash } = passwordGenerator(userInformation.password);
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
