const usersRepo = require('./user.memory.repository');

const User = require('./user.model');

const getAll = () => usersRepo.getAll();

//
const getUserById = id => usersRepo.getUserById(id);

//
// const createNewUser = newUser => usersRepo.createNewUser(newUser);

const createNewUser = async newUser => {
  const user = new User(newUser);

  // try catch
  return usersRepo.createNewUser(User.toSend(user)).then(() => {
    return User.toResponse(user);
  });
};

module.exports = { getAll, getUserById, createNewUser };
