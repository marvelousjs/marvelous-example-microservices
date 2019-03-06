import { Request } from 'express';
import { GatewayMethod } from 'marvelous';

// from user service
import { Client as UserRpcClient } from '../../../../../services/user/.auto/clients/client';

export class UsersRoutePost extends GatewayMethod {
  handler: any = async (req: Request) => {
    const userRpcClient = new UserRpcClient();
    await userRpcClient.createUser({
      email: req.body.email,
      password: req.body.password
    });
    return {
      statusCode: 201
    };
  };
}
