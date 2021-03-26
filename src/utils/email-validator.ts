import { EmailValidator } from '../presentation/protocols/email-validator';

class EmailValidadorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return false;
  }
}

export default EmailValidadorAdapter;
