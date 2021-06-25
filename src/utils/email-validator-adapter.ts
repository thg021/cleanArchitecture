import { EmailValidator } from '../presentation/protocols/email-validator';
import validator from 'validator';

class EmailValidadorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}

export default EmailValidadorAdapter;
