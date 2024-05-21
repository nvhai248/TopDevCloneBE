const createServer = require('../utils/server-test');
const sequelize = require('../database/pg');
const supertest = require('supertest');
const { jobs } = require('../__mocks__/mock');

describe('Start unit test for update job API', () => {
  let app;
  let server;

  beforeAll(async () => {
    await sequelize.authenticate();
    app = await createServer();
    server = app.listen(5002); // Ensure the server is listening on a port
  });

  afterAll(async () => {
    await sequelize.close();
    server.close(); // Close the server after tests
  });

  test('data is OK, Should return status 200', async () => {
    const jobId = '77rJraD';
    const job = jobs[0];

    const response = await supertest(app).patch(`/${jobId}`).send(job).expect(200);

    expect(response.body).toEqual({
      statusCode: 200,
      data: true,
      message: 'OK',
    });
  });

  test('Id is undefine, Should return status 500', async () => {
    const jobId = undefined;
    const job = jobs[0];

    const response = await supertest(app).patch(`/${jobId}`).send(job).expect(500);

    expect(response.body).toEqual({
      statusCode: 200,
      data: true,
      message: 'OK',
    });
  });

  test('Id is null, Should return status 500', async () => {
    const jobId = null;
    const job = jobs[0];

    const response = await supertest(app).patch(`/${jobId}`).send(job).expect(500);

    expect(response.body).toEqual({
      statusCode: 200,
      data: true,
      message: 'OK',
    });
  });

  test('Id is not found(not in db), Should return status 400', async () => {
    const jobId = '3AmtMjQcqX';
    const job = jobs[0];

    const response = await supertest(app).patch(`/${jobId}`).send(job).expect(400);

    expect(response.body).toEqual({
      statusCode: 200,
      data: true,
      message: 'OK',
    });
  });

  // Duy Tran
  // title is null
  // level is null => should return 404
  // salaryType is null => should return 404

  // Huy Truong
  // startDate is null => should return 404
  // endDate is null => should return 404
});
