import { GatewayRoute } from 'marvelous';

import { AuthLoginRoutePost } from './post/AuthLoginRoutePost';

export class AuthLoginRoute extends GatewayRoute {
  uri = '/auth/login';
  methods = {
    post: AuthLoginRoutePost
  }
}