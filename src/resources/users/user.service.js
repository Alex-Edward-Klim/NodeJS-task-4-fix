const usersRepo = require('./user.memory.repository');

const User = require('./user.model');

// Get all users
const getAll = () => usersRepo.getAll();

// Get a user by ID
const getUserById = id => usersRepo.getUserById(id);

// Create a new user
const createNewUser = async newUser => {
  const user = new User(newUser);
  return usersRepo.createNewUser(User.toSend(user)).then(() => {
    return User.toResponse(user);
  });
};

module.exports = { getAll, getUserById, createNewUser };
