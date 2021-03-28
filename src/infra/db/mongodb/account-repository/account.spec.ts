import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoHelper } from '../helpers/mongo-helper';
import AccountMongoRepository from './account';
describe('Account Mongo Repository', () => {
  let mongo: MongoMemoryServer;
  beforeAll(async () => {
    mongo = new MongoMemoryServer({ binary: { version: '4.2.6' } });
    const uri = await mongo.getUri();
    await MongoHelper.connect(uri);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('should return an account on success', async () => {
    const sut = new AccountMongoRepository();

    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe('any_name');
    expect(account.email).toBe('any_email@mail.com');
    expect(account.password).toBe('any_password');
  });
});
