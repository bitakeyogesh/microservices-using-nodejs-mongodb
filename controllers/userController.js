/* eslint-disable consistent-return */
const { UserService } = require('../services/userService');
const { UserRepository } = require('../repo/userRepo');

const UserModel = require('../models/User');

const userRepository = new UserRepository(UserModel);

const userService = new UserService(userRepository);

exports.addUser = async (req, res, next) => {
  try {
    const response = await userService.addUser(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const response = await userService.getAllUsers(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getUserById = async (req, res, next) => {
  try {
    const response = await userService.getUserById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.updateUserById = async (req, res, next) => {
  try {
    const response = await userService.updateUserById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const response = await userService.deleteUserById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
