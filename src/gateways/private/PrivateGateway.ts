import { Gateway, ValidationGatewayError } from 'marvelous';

import { AuthError } from './errors';

import { UsersRoute } from './routes';

export class PrivateGateway extends Gateway {
  knownErrors = [
    AuthError,
    ValidationGatewayError
  ];
  routes = [
    UsersRoute
  ];
}
