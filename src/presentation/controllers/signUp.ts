import { HttpRequest, HttpResponse } from '../protocols/http';
import { EmailValidator } from '../protocols/email-validator';
import { Controller } from '../protocols/controller';

import { badRequest, serverError } from '../helpers/http-helper';

import { MissingParamError } from '../errors/missing-param-error';
import { InvalidParamError } from '../errors/invalid-param-error';
import { ServerError } from '../errors/server-error';

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
      const { email } = httpRequest.body;
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isEmailValid = this.emailValidator.isValid(email);
      if (!isEmailValid) return badRequest(new InvalidParamError('email'));

      return {
        body: '',
        statusCode: 200,
      };
    } catch (error) {
      return serverError(new ServerError());
    }
  }
}

export default SignUpController;
