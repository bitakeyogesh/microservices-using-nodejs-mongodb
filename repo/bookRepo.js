class BookRepository {
  constructor(bookModel) {
    this.bookModel = bookModel;
  }

  addBook(uuid, name, releaseDate, authorName) {
    return this.bookModel.create({
      uuid,
      name,
      releaseDate,
      authorName,
    });
  }

  getAllBooks() {
    return this.bookModel.find();
  }

  getBookById(uuid) {
    return this.bookModel.findOne({ uuid });
  }

  updateBookById(uuid, name, releaseDate, authorName) {
    return this.bookModel.findOneAndUpdate({ uuid }, {
      $set: { name, releaseDate, authorName }
    }, { new: true });
  }

  deleteBookById(uuid) {
    return this.bookModel.findOneAndDelete({ uuid });
  }
}

module.exports = {
  BookRepository,
};
