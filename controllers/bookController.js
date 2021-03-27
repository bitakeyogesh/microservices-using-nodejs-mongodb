/* eslint-disable consistent-return */
const { BookService } = require('../services/bookService');
const { BookRepository } = require('../repo/bookRepo');

const BookModel = require('../models/Book');

const bookRepository = new BookRepository(BookModel);

const bookService = new BookService(bookRepository);

exports.addBook = async (req, res, next) => {
  try {
    const response = await bookService.addBook(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getAllBooks = async (req, res, next) => {
  try {
    const response = await bookService.getAllBooks(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
exports.getBookById = async (req, res, next) => {
  try {
    const response = await bookService.getBookById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.updateBookById = async (req, res, next) => {
  try {
    const response = await bookService.updateBookById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};

exports.deleteBookById = async (req, res, next) => {
  try {
    const response = await bookService.deleteBookById(req);
    res.statusCode = response.statusCode;
    return res.json({ message: response.message, data: response.data });
  } catch (error) {
    next(error);
  }
};
