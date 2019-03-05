import { Gateway } from 'marvelous';

import { AuthError } from './errors';

import { PostUsersOperation } from './operations';

export class PrivateGateway extends Gateway {
  knownErrors = [
    AuthError
  ];
  paths = {
    '/users': {
      post: {
        operation: PostUsersOperation
      }
    }
  };
}
