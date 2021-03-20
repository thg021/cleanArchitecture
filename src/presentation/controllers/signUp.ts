import { HttpRequest, HttpResponse } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body;
    let message = '';
    if (!name) message = 'name';
    if (!email) message = 'email';

    return badRequest(new MissingParamError(message));
  }
}

export default SignUpController;
