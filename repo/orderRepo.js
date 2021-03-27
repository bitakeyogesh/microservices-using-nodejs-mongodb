class OrderRepository {
  constructor(OrderModel) {
    this.OrderModel = OrderModel;
  }

  addOrder(uuid, bookId, userId, orderedDate, deliveryDate) {
    return this.OrderModel.create({
      uuid, bookId, userId, orderedDate, deliveryDate
    });
  }

  getAllOrders() {
    return this.OrderModel.find();
  }

  getOrderById(uuid) {
    return this.OrderModel.findOne({ uuid });
  }

  updateOrderById(uuid, bookId, userId, orderedDate, deliveryDate) {
    return this.OrderModel.findOneAndUpdate({ uuid }, {
      $set: { bookId, userId, orderedDate, deliveryDate }
    }, { new: true });
  }

  deleteOrderById(uuid) {
    return this.OrderModel.findOneAndDelete({ uuid });
  }
}

module.exports = {
  OrderRepository,
};
