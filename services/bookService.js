const uuid = require('uuid');
const customResourceResponse = require('../utils/constants');

class BookService {
  constructor(bookRepo) {
    this.bookRepo = bookRepo;
  }

  async addBook(req) {
    const { name } = req.body;
    const { releaseDate } = req.body;
    const { authorName } = req.body;
    const uuidV4 = uuid.v4();
    const response = {};

    if (!name || !releaseDate || !authorName) {
      response.message = customResourceResponse.reqValidationError.message;
      response.statusCode = customResourceResponse.reqValidationError.statusCode;
      return response;
    }
    const book = await this.bookRepo.addBook(uuidV4, name, releaseDate, authorName);

    if (!book) {
      response.message = customResourceResponse.serverError.message;
      response.statusCode = customResourceResponse.serverError.statusCode;
      return response;
    }
    response.message = customResourceResponse.reqCreated.message;
    response.statusCode = customResourceResponse.reqCreated.statusCode;
    response.data = book;
    return response;
  }

  async getAllBooks(req) {
    const response = {};

    const books = await this.bookRepo.getAllBooks();

    if (!books) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = books;
    return response;
  }

  async getBookById(req) {
    const response = {};
    const { uuid } = req.params;

    const book = await this.bookRepo.getBookById(uuid);
    if (!book) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }
    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = book;
    return response;
  }

  async updateBookById(req) {
    const { name } = req.body;
    const { releaseDate } = req.body;
    const { authorName } = req.body;

    const response = {};
    const { uuid } = req.params;

    const updatedBook = await this.bookRepo.updateBookById(uuid, name, releaseDate, authorName);
    if (!updatedBook) {
      response.message = customResourceResponse.recordNotFound.message;
      response.statusCode = customResourceResponse.recordNotFound.statusCode;
      return response;
    }

    response.message = customResourceResponse.success.message;
    response.statusCode = customResourceResponse.success.statusCode;
    response.data = updatedBook;
    return response;
  }

  async deleteBookById(req) {
    const response = {};
    const { uuid } = req.params;

    const deletedBook = await this.bookRepo.deleteBookById(uuid);
    if (!deletedBook) {
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
  BookService,
};
