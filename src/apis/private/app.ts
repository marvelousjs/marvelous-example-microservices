import { RestServer } from 'marvelous';

import { AuthError } from './errors';

import { CreateUserOperation } from './operations';

export class PrivateRestServer extends RestServer {
  knownErrors = [
    AuthError
  ];
  paths = {
    '/users': {
      post: CreateUserOperation
    }
  };
}
