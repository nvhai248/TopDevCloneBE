const SimpleParser = require('./simpleParser');
import createServer from '../express-app';

const app = createServer();
describe('Start unit test for update job Api', () => {
  // Run one-time

  beforeAll(async () => {
    // connect to db
    //
  });

  afterAll(async () => {
    // close connection
  });

  // is OK
  // Id job is undefined => should return 403
  // Id job is null => should return 403
  // Id Job is not found => expect return 404
  // title is null
  // title is undefined => should return 404
  // level is null => should return 404
  // level is undefined => should return 404
  // salaryType is null => should return 404
  // salaryType is undefined => should return 404
  // startDate is null => should return 404
  // startDate is undefined => should return 404
  // endDate is null => should return 404
  // endDate is undefined => should return 404
  // status is null => should return 404
  // status is undefined => should return 404
});
