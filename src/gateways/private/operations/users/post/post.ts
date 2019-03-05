import { Request } from 'express';
import { GatewayOperation } from 'marvelous';

// from user service
import { Client as UserRpcClient } from '../../../../../services/user/.auto/clients/client';

export class PostUsersOperation extends GatewayOperation {
  handler: any = async (req: Request) => {
    const userRpcClient = new UserRpcClient();
    await userRpcClient.createUser({
      email: req.body.email,
      password: req.body.password
    });
    return {};
  };
}
