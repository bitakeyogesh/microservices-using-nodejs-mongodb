const uuid = require('uuid');
const customResourceResponse = require('../utils/constants');
const axios  = require('axios');

class OrderService {
  constructor(orderRepo) {
    this.orderRepo = orderRepo;
  }

  async addOrder(req) {
    const { bookId, userId, orderedDate, deliveryDate} = req.body;
    const uuidV4 = uuid.v4();
    const response = {};
 
    if (!bookId || !userId || !orderedDate || !deliveryDate) {
      response.message = customResourceResponse.reqValidationError.message;
      response.statusCode = customResourceResponse.reqValidationError.statusCode;
      return response;
    }
    //validation
    try {
      await axios.get(`${process.env.USER_API_ENDPOINT}/api/v1/user/`+ userId);
      await axios.get(`${process.env.BOOK_API_ENDPOINT}/api/v1/book/`+ bookId)
    } catch (error) {
      console.log(error);
      response.message = customResourceResponse.reqValidationError.message;
      response.statusCode = customResourceResponse.reqValidationError.statusCode;
      return response;
    }

    const order = await this.orderRepo.addOrder(uuidV4, bookId, userId, orderedDate, deliveryDate);

    if (!order) {
      response.message = customResourceResponse.serverError.message;
      response.statusCode = customResourceResponse.serverError.statusCode;
      return response;
    }
    response.message = customResourceResponse.reqCreated.message;
    response.statusCode = customResourceResponse.reqCreated.statusCode;
    response.data = order;
    return response;
  }

  async getAllOrders(req) {
    const response = {};

    const orders = await this.orderRepo.getAllOrders();

    if (!orders) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = orders;
    return response;
  }

  async getOrderById(req) {
    const response = {};
    const { uuid } = req.params;

    const order = await this.orderRepo.getOrderById(uuid);
    if (!order) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = order;
    return response;
  }

  async updateOrderById(req) {
    const { bookId } = req.body;
    const { userId } = req.body;
    const { orderedDate } = req.body;
    const { deliveryDate } = req.body;

    const response = {};
    const { uuid } = req.params;

    const updatedOrder = await this.orderRepo.updateOrderById(uuid, bookId, userId, orderedDate, deliveryDate);
    if (!updatedOrder) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }

    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = updatedOrder;
    return response;
  }

  async deleteOrderById(req) {
    const response = {};
    const { uuid } = req.params;

    const deletedOrder = await this.orderRepo.deleteOrderById(uuid);
    if (!deletedOrder) {
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
  OrderService,
};
