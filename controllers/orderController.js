/* eslint-disable consistent-return */
const { OrderService } = require('../services/orderService');
const { OrderRepository } = require('../repo/OrderRepo');

const OrderModel = require('../models/Order');

const orderRepository = new OrderRepository(OrderModel);

const orderService = new OrderService(orderRepository);

exports.addOrder = async (req, res, next) => {
  try {
    const response = await orderService.addOrder(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getAllOrders = async (req, res, next) => {
  try {
    const response = await orderService.getAllOrders(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getOrderById = async (req, res, next) => {
  try {
    const response = await orderService.getOrderById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.updateOrderById = async (req, res, next) => {
  try {
    const response = await orderService.updateOrderById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.deleteOrderById = async (req, res, next) => {
  try {
    const response = await orderService.deleteOrderById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
