import makeUser from "../../entities/user/index.js";

export default function makeUpdateUser({ usersDb }) {
  return async function updateUser({ id, ...inputData }) {
    if (!id) {
      throw new Error("You must supply an id.");
    }

    const userToUpdate = await usersDb.findById(id);

    if (!userToUpdate) {
      throw new Error("The user to update was not found");
    }

    const newUser = makeUser({ ...userToUpdate._doc, ...inputData });

    return usersDb.update(id, {
      firstName: newUser.getFirstName(),
      lastName: newUser.getLastName(),
      userName: newUser.getUserName(),
      email: newUser.getEmail(),
      updatedAt: Date.now(),
      isAdmin: newUser.isAdmin(),
    });
  };
}
