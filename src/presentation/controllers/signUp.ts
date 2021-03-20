import { HttpRequest, HttpResponse } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body;
    let message = '';
    if (!name) {
      message = 'name';
    }

    if (!email) {
      message = 'email';
    }

    return {
      statusCode: 400,
      body: new MissingParamError(message),
    };
  }
}

export default SignUpController;
