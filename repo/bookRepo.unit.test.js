const { BookRepository } = require('./bookRepo');

let sut;

const setup = (bookModel) => {
  const bookModelMock = jest.fn().mockImplementation(() => ({
    ...bookModel,
  }));
  sut = new BookRepository(bookModelMock());
};

const uuid = 'uuid';
const name = 'Test Book';
const releaseDate = '2005-05-08';
const authorName = 'Test Author';

describe('bookRepo.js', () => {
  describe('addBook', () => {
    it('Should add book', async () => {
      const createMock = jest.fn().mockResolvedValue(null);
      setup({ create: createMock });

      await sut.addBook(uuid, name, releaseDate, authorName);
      expect(createMock).toHaveBeenCalledTimes(1);
      expect(createMock).toHaveBeenCalledWith({
        authorName: 'Test Author',
        name: 'Test Book',
        releaseDate: '2005-05-08',
        uuid: 'uuid'
      });
    });
  });
  describe('getAllBooks', () => {
    it('Should get all books', async () => {
      const findMock = jest.fn().mockResolvedValue(null);
      setup({ find: findMock });

      await sut.getAllBooks();
      expect(findMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('getBookById', () => {
    it('Should get a book', async () => {
      const findOneMock = jest.fn().mockResolvedValue(null);
      setup({ findOne: findOneMock });

      await sut.getBookById(uuid);
      expect(findOneMock).toHaveBeenCalledTimes(1);
      expect(findOneMock).toHaveBeenCalledWith({ uuid: 'uuid' });
    });
  });

  describe('updateBookById', () => {
    it('Should update a book', async () => {
      const findOneAndUpdateMock = jest.fn().mockResolvedValue(null);
      setup({ findOneAndUpdate: findOneAndUpdateMock });

      await sut.updateBookById(uuid, name, releaseDate, authorName);
      expect(findOneAndUpdateMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteBookById', () => {
    it('Should delete a book', async () => {
      const findOneAndDeleteMock = jest.fn().mockResolvedValue(null);
      setup({ findOneAndDelete: findOneAndDeleteMock });

      await sut.deleteBookById(uuid);
      expect(findOneAndDeleteMock).toHaveBeenCalledTimes(1);
      expect(findOneAndDeleteMock).toHaveBeenCalledWith({ uuid: 'uuid' });
    });
  });
});
