import { GatewayRoute } from 'marvelous';

import { UsersRoutePost } from './post/PostUsersMethod';

export class UsersRoute extends GatewayRoute {
  uri = '/users';
  methods = {
    post: UsersRoutePost
  };
}