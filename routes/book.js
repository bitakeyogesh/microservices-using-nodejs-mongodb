const express = require('express');

const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/book/add', bookController.addBook);
router.get('/books', bookController.getAllBooks);
router.get('/book/:uuid', bookController.getBookById);
router.put('/book/:uuid', bookController.updateBookById);
router.delete('/book/:uuid', bookController.deleteBookById);

module.exports = router;
