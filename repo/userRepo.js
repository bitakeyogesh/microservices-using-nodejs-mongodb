class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  addUser(uuid, name, age, mobile, address) {
    return this.userModel.create({
      uuid,
      name,
      age,
      mobile,
      address
    });
  }

  getAllUsers() {
    return this.userModel.find();
  }

  getUserById(uuid) {
    return this.userModel.findOne({ uuid });
  }

  updateUserById(uuid, name, age, mobile, address) {
    return this.userModel.findOneAndUpdate({ uuid }, {
      $set: { name, age, mobile, address }
    }, { new: true });
  }

  deleteUserById(uuid) {
    return this.userModel.findOneAndDelete({ uuid });
  }
}

module.exports = {
  UserRepository,
};
