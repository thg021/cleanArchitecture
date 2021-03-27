import {
  AccountModel,
  AddAccount,
  AddAccountModel,
  Encrypter,
} from './db-add-account-protocol';

class DbAddAccount implements AddAccount {
  private readonly encripter: Encrypter;
  constructor(encripter: Encrypter) {
    this.encripter = encripter;
  }
  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encripter.encrypt(account.password);
    return new Promise(resolve => resolve(null));
  }
}

export default DbAddAccount;
