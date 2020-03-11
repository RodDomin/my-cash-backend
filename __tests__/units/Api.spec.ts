import Api from '../../src/api';
import supertest, { SuperTest, Test } from 'supertest';

describe('Api class tests', () => {
  let api: SuperTest<Test>;

  beforeAll(async () => {
    const app = new Api();
    api = supertest(app.application);
  });

  test('test if application works', async () => {
    const { status } = await api.get('/');

    expect(status).toBe(200);
  });
});
