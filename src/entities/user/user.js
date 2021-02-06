export default function buildMakeUser({ Id }) {
  return function makeUser({
    id = Id.createId(),
    createdAt = Date.now(),
    updatedAt = Date.now(),
    firstName,
    lastName,
    username,
    email,
    admin = false,
  } = {}) {
    if (!Id.isValid(id)) {
      throw new Error("Id is not valid");
    }
    if (!username || username.length < 6) {
      throw new Error("Username name must at least contain 6 characters");
    }
    return Object.freeze({
      getUserId: () => id,
      getUserCreatedAt: () => createdAt,
      getUserUpdatedAt: () => updatedAt,
      getFirstName: () => firstName,
      getLastName: () => lastName,
      getUserName: () => username,
      getEmail: () => email,
      isAdmin: () => admin,
    });
  };
}
