module.exports = { 
  usersMongoURI: `mongodb://localhost/${process.env.USERS_DATABASE_NAME}`,
  booksMongoURI: `mongodb://localhost/${process.env.BOOKS_DATABASE_NAME}`,
  ordersMongoURI: `mongodb://localhost/${process.env.ORDERS_DATABASE_NAME}`
};
