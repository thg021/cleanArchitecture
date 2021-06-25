import EmailValidatorAdapter from './email-validator';
import validator from 'validator';

jest.mock('validator', () => ({
  isEmail(): Boolean {
    return true;
  },
}));

describe('EmailValidator Adapter', () => {
  test('Should return false if Validator returns false', () => {
    const sut = new EmailValidatorAdapter();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('invalid_mail@mail.com');

    expect(isValid).toBe(false);
  });

  test('Should return true if Validator returns true', () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid('valid_mail@mail.com');

    expect(isValid).toBe(true);
  });
});
