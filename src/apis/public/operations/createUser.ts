import { RestOperation } from 'marvelous';

import { Client as UserRpcClient } from '../../../services/user/.auto/clients/client';

import { AuthError } from '../errors';

export class CreateUserOperation extends RestOperation {
  handler: any = async (req: any) => {
    if (req.session.isLoggedIn) {
      throw new AuthError('Guest allowed only');
    }

    const userRpcClient = new UserRpcClient({
      url: 'http://localhost:3003'
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
}
