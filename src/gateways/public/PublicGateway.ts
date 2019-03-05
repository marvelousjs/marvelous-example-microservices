import { Gateway } from 'marvelous';

import { AuthError } from './errors';

import { AuthLoginRoute, UsersRoute } from './routes';

export class PublicGateway extends Gateway {
  knownErrors = [
    AuthError
  ];
  routes = [
    AuthLoginRoute,
    UsersRoute
  ];
}
