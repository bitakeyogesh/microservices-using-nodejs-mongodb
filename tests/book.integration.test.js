const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');

const name = 'Test Book';
const releaseDate = '2002-05-09';
const authorName = 'Test Author';
let uuid;
const updatedName = 'Another Test Book';

beforeAll((done) => {
  done();
});

describe('POST /addBook', () => {
  it('should add book details', async () => {
    const response = await request(app)
      .post('/api/v1/book/add')
      .type('json')
      .send({
        name,
        releaseDate,
        authorName
      });
    uuid = JSON.parse(response.text).data.uuid; // get the uuid to pass to other endpoints
    expect(response.statusCode).toBe(201);
  });
});

describe('GET /books', () => {
  it('should get all books', async () => {
    const response = await request(app)
      .get('/api/v1/books')
      .type('json')
      .send();
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /book', () => {
  it('should get a book details by Id', async () => {
    const response = await request(app)
      .get(`/api/v1/book/${uuid}`)
      .type('json')
      .send({
        name,
        releaseDate,
        authorName
      });
    expect(response.statusCode).toBe(200);
  });
});

describe('PUT /book', () => {
  it('should update a book', async () => {
    const response = await request(app)
      .put(`/api/v1/book/${uuid}`)
      .type('json')
      .send({
        name: updatedName,
        releaseDate,
        authorName
      });
    expect(response.statusCode).toBe(200);
  });
});

describe('DELETE /book', () => {
  it('should delete a book', async () => {
    const response = await request(app)
      .delete(`/api/v1/book/${uuid}`)
      .type('json')
      .send();
    expect(response.statusCode).toBe(200);
  });
});

// Close database connection
afterAll(() => {
  console.log('in db close');
  mongoose.connection.close();
});
