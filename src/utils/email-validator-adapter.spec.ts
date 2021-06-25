import EmailValidatorAdapter from './email-validator';

describe('EmailValidator Adapter', () => {
  test('Should return false if Validator returns false', () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid('invalid_mail@mail.com');

    expect(isValid).toBe(false);
  });
});
