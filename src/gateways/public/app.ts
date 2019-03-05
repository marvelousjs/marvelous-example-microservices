import { Gateway } from 'marvelous';

import { AuthError } from './errors';

import { PostAuthLoginOperation, PostUsersOperation } from './operations';

export class PublicGateway extends Gateway {
  knownErrors = [
    AuthError
  ];
  paths = {
    '/auth/login': {
      post: {
        operation: PostAuthLoginOperation
      }
    },
    '/users': {
      post: {
        operation: PostUsersOperation
      }
    }
  };
}
