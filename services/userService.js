const uuid = require('uuid');
const customResourceResponse = require('../utils/constants');

class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async addUser(req) {
    const { name, age, mobile, address } = req.body;
    const uuidV4 = uuid.v4();
    const response = {};

    if (!name || !age || !mobile || !address) {
      response.message = customResourceResponse.reqValidationError.message;
      response.statusCode = customResourceResponse.reqValidationError.statusCode;
      return response;
    }
    const user = await this.userRepo.addUser(uuidV4, name, age, mobile, address);

    if (!user) {
      response.message = customResourceResponse.serverError.message;
      response.statusCode = customResourceResponse.serverError.statusCode;
      return response;
    }
    response.message = customResourceResponse.reqCreated.message;
    response.statusCode = customResourceResponse.reqCreated.statusCode;
    response.data = user;
    return response;
  }

  async getAllUsers(req) {
    const response = {};

    const users = await this.userRepo.getAllUsers();

    if (!users) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = users;
    return response;
  }

  async getUserById(req) {
    const response = {};
    const { uuid } = req.params;

    const user = await this.userRepo.getUserById(uuid);
    if (!user) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = user;
    return response;
  }

  async updateUserById(req) {
    const { name, age, mobile, address } = req.body;
    const response = {};
    const { uuid } = req.params;

    const updatedUser = await this.userRepo.updateUserById(uuid, name, age, mobile, address);
    if (!updatedUser) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }

    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = updatedUser;
    return response;
  }

  async deleteUserById(req) {
    const response = {};
    const { uuid } = req.params;

    const deletedUser = await this.userRepo.deleteUserById(uuid);
    if (!deletedUser) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }

    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    return response;
  }
}

module.exports = {
  UserService,
};
