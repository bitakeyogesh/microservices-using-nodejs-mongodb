const { BookService } = require('./bookService');

let sut;

const setup = (bookRepo) => {
  const bookRepoMock = jest.fn().mockImplementation(() => ({
    ...bookRepo,
  }));

  sut = new BookService(bookRepoMock());
};

describe('bookService.js', () => {
  describe('addBook', () => {
    it('Should add a new book in db', async () => {
      const req = {
        body: {
          name: 'TestBook',
          releaseDate: '2002-05-09',
          authorName: 'Yogesh Bitake'
        }
      };
      const addBookResult = {
        _id: 'someId',
        uuid: 'uuid',
        name: 'TestBook',
        releaseDate: '2002-05-09T00:00:00.000Z',
        authorName: 'Yogesh Bitake',
        __v: 0
      };
      const addBookMock = jest.fn().mockReturnValue(addBookResult);
      setup({ addBook: addBookMock });

      const response = await sut.addBook(req);
      expect(addBookMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(201);
    });
    it('Should give an error', async () => {
      const req = {
        body: {
          name: 'TestBook',
          releaseDate: '2002-05-09',
          authorName: 'Yogesh Bitake'
        }
      };

      const addBookMock = jest.fn().mockReturnValue(false);
      setup({ addBook: addBookMock });

      const response = await sut.addBook(req);
      expect(addBookMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(500);
      expect(response.message).toBe('Internal server error.');
    });
    it('Should give invalid request data', async () => {
      const req = {
        body: {
          name: '',
          releaseDate: '',
          authorName: 'Test Author'
        }
      };

      const addBookMock = jest.fn().mockReturnValue(false);
      setup({ addBook: addBookMock });

      const response = await sut.addBook(req);
      expect(response.statusCode).toBe(422);
      expect(response.message).toBe('Data validation failed.');
    });
  });

  describe('getAllBooks', () => {
    it('Should get all books', async () => {
      const req = {};

      const getAllBooksResult = {

        _id: 'someId',
        uuid: 'uuid',
        name: 'TestBook',
        releaseDate: '2002-05-09T00:00:00.000Z',
        authorName: 'Yogesh Bitake',
        __v: 0
      };
      const getAllBooksMock = jest.fn().mockReturnValue(getAllBooksResult);
      setup({ getAllBooks: getAllBooksMock });

      const response = await sut.getAllBooks(req);

      expect(getAllBooksMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(200);
    });
    it('Should give no record found', async () => {
      const req = {};

      const getAllBooksMock = jest.fn().mockReturnValue(false);
      setup({ getAllBooks: getAllBooksMock });

      const response = await sut.getAllBooks(req);
      expect(getAllBooksMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(404);
      expect(response.message).toBe('No record found.');
    });
  });

  describe('getBookById', () => {
    it('Should get a book', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        }
      };

      const getBookResult = {
        _id: 'someId',
        uuid: 'uuid',
        name: 'TestBook',
        releaseDate: '2002-05-09T00:00:00.000Z',
        authorName: 'Yogesh Bitake',
        __v: 0

      };
      const getBookByIdMock = jest.fn().mockReturnValue(getBookResult);
      setup({ getBookById: getBookByIdMock });

      const response = await sut.getBookById(req);

      expect(getBookByIdMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(200);
    });
    it('Should give no record found', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        }
      };

      const getBookByIdMock = jest.fn().mockReturnValue(false);
      setup({ getBookById: getBookByIdMock });

      const response = await sut.getBookById(req);
      expect(getBookByIdMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(404);
      expect(response.message).toBe('No record found.');
    });
  });

  describe('updateBookById', () => {
    it('Should update a book', async () => {
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

      const updateBookResult = {
        _id: 'someId',
        uuid: 'uuid',
        name: 'Another Test Book',
        releaseDate: '2002-05-09T00:00:00.000Z',
        authorName: 'Yogesh Bitake',
        __v: 0

      };
      const updateBookByIdMock = jest.fn().mockReturnValue(updateBookResult);
      setup({ updateBookById: updateBookByIdMock });

      const response = await sut.updateBookById(req);

      expect(updateBookByIdMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(200);
    });
    it('Should give no record found', async () => {
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

      const updateBookByIdMock = jest.fn().mockReturnValue(false);
      setup({ updateBookById: updateBookByIdMock });

      const response = await sut.updateBookById(req);
      expect(updateBookByIdMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(404);
      expect(response.message).toBe('No record found.');
    });
  });

  describe('deleteBookById', () => {
    it('Should delete a book', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        }
      };

      const deleteBookByIdMock = jest.fn().mockReturnValue(true);
      setup({ deleteBookById: deleteBookByIdMock });

      const response = await sut.deleteBookById(req);

      expect(deleteBookByIdMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(200);
    });
    it('Should give no record found', async () => {
      const req = {
        params: {
          uuid: 'uuid'
        }
      };

      const deleteBookByIdMock = jest.fn().mockReturnValue(false);
      setup({ deleteBookById: deleteBookByIdMock });

      const response = await sut.deleteBookById(req);
      expect(deleteBookByIdMock).toHaveBeenCalledTimes(1);
      expect(response.statusCode).toBe(404);
      expect(response.message).toBe('No record found.');
    });
  });
});
