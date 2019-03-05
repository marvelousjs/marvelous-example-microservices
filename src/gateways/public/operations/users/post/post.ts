import { GatewayOperation } from 'marvelous';

import { Client as UserRpcClient } from '../../../../../services/user/.auto/clients/client';

import { AuthError } from '../../../errors';
import { PostUsersSchema } from '../../../../private/operations/users/post/post.schema';
import { IPostUsersHandler } from '../../../.auto';

export class PostUsersOperation extends GatewayOperation {
  handler: IPostUsersHandler = async (req: any) => {
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
      status: 201,
      body: {
        id: result.id
      }
    };
  };

  schemaa = PostUsersSchema;
}
