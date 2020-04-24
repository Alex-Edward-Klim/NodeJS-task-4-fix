// const User = require('./user.model');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const customSchema = new Schema(
  {
    _id: {
      type: String
    }
  },
  {
    strict: false,
    versionKey: false
  }
);

const MongooseUser = mongoose.model('User', customSchema);

const getAll = async () => {
  return MongooseUser.find()
    .lean()
    .exec()
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

const getUserById = async id => {
  return MongooseUser.findById(id)
    .exec()
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

const createNewUser = async newUser => {
  const mongooseUser = new MongooseUser(newUser);

  return mongooseUser
    .save()
    .then(() => {
      return mongooseUser;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  getAll,
  MongooseUser,
  getUserById,
  createNewUser
};
