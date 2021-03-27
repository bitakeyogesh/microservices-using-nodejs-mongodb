const addBookResult = {
  message: 'Sucessfully created the record',
  data: {
    _id: 'someId',
    uuid: 'uuid',
    name: 'TestBook',
    releaseDate: '2002-05-09T00:00:00.000Z',
    authorName: 'Yogesh Bitake',
    __v: 0
  }
};

const getAllBooksResult = {
  message: 'Sucessfully fetched the records',
  data: [
    {
      _id: 'someId',
      uuid: 'uuid',
      name: 'TestBook',
      releaseDate: '2002-05-09T00:00:00.000Z',
      authorName: 'Yogesh Bitake',
      __v: 0
    }
  ]
};
const getBookResult = {
  message: 'Sucessfully fetched the record',
  data: {
    _id: 'someId',
    uuid: 'uuid',
    name: 'TestBook',
    releaseDate: '2002-05-09T00:00:00.000Z',
    authorName: 'Yogesh Bitake',
    __v: 0
  }
};

const updateBookResult = {
  message: 'Sucessfully updated the records',
  data: {
    _id: 'someId',
    uuid: 'uuid',
    name: 'Another Test Book',
    releaseDate: '2002-10-09T00:00:00.000Z',
    authorName: 'Yogesh Bitake',
    __v: 0
  }
};

const deleteBookResult = {
  message: 'Sucessfully deleted the record',
};

const mockAddBook = jest.fn().mockResolvedValueOnce(addBookResult);
const mockGetAllBooks = jest.fn().mockResolvedValueOnce(getAllBooksResult);
const mockGetBookById = jest.fn().mockResolvedValueOnce(getBookResult);
const mockUpdateBookById = jest.fn().mockResolvedValueOnce(updateBookResult);
const mockDeleteBookById = jest.fn().mockResolvedValueOnce(deleteBookResult);

jest.mock('../services/bookService', () => ({
  BookService: jest.fn().mockImplementation(() => ({
    addBook: mockAddBook,
    getAllBooks: mockGetAllBooks,
    getBookById: mockGetBookById,
    updateBookById: mockUpdateBookById,
    deleteBookById: mockDeleteBookById
  })),
}));

const bookController = require('./bookController');

describe('bookController.js', () => {
  describe('Add a book', () => {
    it('Should add a book in db(positive test)', async () => {
      const req = {
        body: {
          name: 'TestBook',
          releaseDate: '2002-05-09',
          authorName: 'Yogesh Bitake'
        }
      };
      const res = {};
      const jsonMock = jest.fn().mockImplementation(() => ({
        message: addBookResult.message,
        data: addBookResult.data,
      }));
      res.json = jsonMock;
      const nextMock = jest.fn().mockReturnValue(true);

      await bookController.addBook(req, res, nextMock);
      expect(mockAddBook).toHaveBeenCalledTimes(1);
      expect(mockAddBook).toHaveBeenCalledWith(req);
      expect(jsonMock).toHaveBeenCalledTimes(1);
      expect(jsonMock).toHaveBeenCalledWith({
        message: addBookResult.message,
        data: addBookResult.data,
      });
    });
  });

  describe('Get all books', () => {
    it('Should get all books from db', async () => {
      const req = {};
      const res = {};
      const jsonMock = jest.fn().mockImplementation(() => ({
        message: getAllBooksResult.message,
        data: getAllBooksResult.data,
      }));
      res.json = jsonMock;
      const nextMock = jest.fn().mockReturnValue(true);
      await bookController.getAllBooks(req, res, nextMock);

      expect(mockGetAllBooks).toHaveBeenCalledTimes(1);
      expect(mockGetAllBooks).toHaveBeenCalledWith(req);
      expect(jsonMock).toHaveBeenCalledTimes(1);
      expect(jsonMock).toHaveBeenCalledWith({
        message: getAllBooksResult.message,
        data: getAllBooksResult.data,
      });
    });
  });

  describe('Get a book by uuid', () => {
    it('Should get get a book by id', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        }
      };
      const res = {};
      const jsonMock = jest.fn().mockImplementation(() => ({
        message: getBookResult.message,
        data: getBookResult.data,
      }));
      res.json = jsonMock;
      const nextMock = jest.fn().mockReturnValue(true);

      await bookController.getBookById(req, res, nextMock);

      expect(mockGetBookById).toHaveBeenCalledTimes(1);
      expect(mockGetBookById).toHaveBeenCalledWith(req);
      expect(jsonMock).toHaveBeenCalledTimes(1);
    });
  });
  describe('Update a book by uuid', () => {
    it('Should update a book by id', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        },
        body: {
          name: 'Another Test Book',
          releaseDate: '2002-10-09',
          authorName: 'Yogesh Bitake'
        }
      };
      const res = {};
      const jsonMock = jest.fn().mockImplementation(() => ({
        message: updateBookResult.message,
        data: updateBookResult.data,
      }));
      res.json = jsonMock;
      const nextMock = jest.fn().mockReturnValue(true);

      await bookController.updateBookById(req, res, nextMock);

      expect(mockUpdateBookById).toHaveBeenCalledTimes(1);
      expect(mockUpdateBookById).toHaveBeenCalledWith(req);
      expect(jsonMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Delete a book by uuid', () => {
    it('Should delete a book by id(positive test)', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        }
      };
      const res = {};
      const jsonMock = jest.fn().mockImplementation(() => ({
        message: deleteBookResult.message
      }));
      res.json = jsonMock;
      const nextMock = jest.fn().mockReturnValue(true);
      await bookController.deleteBookById(req, res, nextMock);

      expect(mockDeleteBookById).toHaveBeenCalledTimes(1);
      expect(mockDeleteBookById).toHaveBeenCalledWith(req);
      expect(jsonMock).toHaveBeenCalledTimes(1);
    });
  });
});
