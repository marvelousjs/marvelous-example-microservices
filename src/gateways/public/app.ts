import { RestServer } from 'marvelous';

import { AuthError } from './errors';

import { CreateUserOperation, LoginOperation } from './operations';

export class PublicGateway extends RestServer {
  knownErrors = [
    AuthError
  ];
  paths = {
    '/auth/login': {
      post: LoginOperation
    },
    '/users': {
      post: CreateUserOperation
    }
  };
}
