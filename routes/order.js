const express = require('express');

const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/order/add', orderController.addOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/order/:uuid', orderController.getOrderById);
router.put('/order/:uuid', orderController.updateOrderById);
router.delete('/order/:uuid', orderController.deleteOrderById);

module.exports = router;
