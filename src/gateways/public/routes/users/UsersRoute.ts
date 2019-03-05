import { GatewayRoute } from 'marvelous';

import { UsersRoutePost } from './post/UsersRoutePost';

export class UsersRoute extends GatewayRoute {
  uri = '/users';
  methods = {
    post: UsersRoutePost
  };
}