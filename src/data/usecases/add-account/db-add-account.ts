import {
  AccountModel,
  AddAccount,
  AddAccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account-protocol';

class DbAddAccount implements AddAccount {
  private readonly encripter: Encrypter;
  private readonly addAccountRepository: AddAccountRepository;
  constructor(
    encripter: Encrypter,
    addAccountRepository: AddAccountRepository,
  ) {
    this.encripter = encripter;
    this.addAccountRepository = addAccountRepository;
  }
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashPassword = await this.encripter.encrypt(accountData.password);
    const account = await this.addAccountRepository.add(
      Object.assign({}, accountData, {
        password: hashPassword,
      }),
    );

    return account;
  }
}

export default DbAddAccount;
