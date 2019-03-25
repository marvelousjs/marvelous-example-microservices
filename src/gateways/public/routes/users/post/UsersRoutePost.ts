import { GatewayMethod } from 'marvelous';

import { UserServiceClient } from '../../../../../services/user/.auto/clients/src';

import { AuthError } from '../../../errors';
import { UsersRoutePostSchema } from './UsersRoutePost.schema';
import { IUsersRoutePostHandler } from '../../../.auto';
import { settings } from '../../../../../settings';

export class UsersRoutePost extends GatewayMethod {
  handler: IUsersRoutePostHandler = async (req) => {
    if (req.session.isLoggedIn) {
      throw new AuthError('Guest allowed only');
    }

    const userServiceClient = new UserServiceClient({
      url: settings.services.user.url
    });
    const result = await userServiceClient.createUser({
      email: req.body.email,
      password: req.body.password
    });

    return {
      statusCode: 201,
      body: {
        id: result.id
      }
    };
  };

  schemaa = UsersRoutePostSchema;
}
