import {
  HttpRequest,
  HttpResponse,
  EmailValidator,
  Controller,
} from '../protocols';

import { badRequest, serverError } from '../helpers/http-helper';
import { MissingParamError, InvalidParamError } from '../errors';

class SignUpController implements Controller {
  //propriedade
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }
  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ];
      const { email, password, passwordConfirmation } = httpRequest.body;
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isEmailValid = this.emailValidator.isValid(email);
      if (!isEmailValid) return badRequest(new InvalidParamError('email'));

      return {
        body: '',
        statusCode: 200,
      };
    } catch (error) {
      return serverError();
    }
  }
}

export default SignUpController;
