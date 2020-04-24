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
      if (!data) {
        // return res
        //   .status(404)
        //   .send(`The user with the ID: ${req.params.userId} was NOT found`);
      }
      return data;
      // res.status(200).json(User.toGet(data.toObject()));
    })
    .catch(err => {
      // res.status(500).json(err);
      return err;
    });
};

// const createNewUser = async newUser => {
//   const user = new User(newUser);
//
//   const mongooseUser = new MongooseUser(User.toSend(user));
//
//   return mongooseUser
//     .save()
//     .then(() => {
//       // res.status(200).json(User.toResponse(user));
//       return User.toResponse(user);
//     })
//     .catch(err => {
//       // res.status(500).json(err);
//       return err;
//     });
// };

const createNewUser = async newUser => {
  const mongooseUser = new MongooseUser(newUser);

  return mongooseUser
    .save()
    .then(() => {
      // res.status(200).json(User.toResponse(user));
      // ?
      // return User.toResponse(user);
      return mongooseUser;
    })
    .catch(err => {
      // res.status(500).json(err);
      return err;
    });
};

module.exports = {
  getAll,
  MongooseUser,
  getUserById,
  // createNewUser,
  createNewUser
};
