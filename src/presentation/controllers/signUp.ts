import { HttpRequest, HttpResponse } from '../protocols/http';

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
      body: new Error(`missing param: ${message}`),
    };
  }
}

export default SignUpController;
