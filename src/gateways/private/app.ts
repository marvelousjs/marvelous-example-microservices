import { RestServer } from 'marvelous';

import { AuthError } from './errors';

import { CreateUserOperation } from './operations';

export class PrivateGateway extends RestServer {
  knownErrors = [
    AuthError
  ];
  paths = {
    '/users': {
      post: CreateUserOperation
    }
  };
}
