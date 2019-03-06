import { GatewayMethod } from 'marvelous';

import { Client as UserRpcClient } from '../../../../../services/user/.auto/clients/client';

import { AuthError } from '../../../errors';
import { UsersRoutePostSchema } from './UsersRoutePost.schema';
import { IUsersRoutePostHandler } from '../../../.auto';

export class UsersRoutePost extends GatewayMethod {
  handler: IUsersRoutePostHandler = async (req: any) => {
    if (req.session.isLoggedIn) {
      throw new AuthError('Guest allowed only');
    }

    const userRpcClient = new UserRpcClient({
      url: 'http://localhost:3002'
    });
    const result = await userRpcClient.createUser({
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
