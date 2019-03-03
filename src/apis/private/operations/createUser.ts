import { Request } from 'express';
import { RestOperation } from 'marvelous';

// from user service
import { Client as UserRpcClient } from '../../../services/user/.auto/clients/client';

export class CreateUserOperation extends RestOperation {
  handler: any = async (req: Request) => {
    const userRpcClient = new UserRpcClient();
    await userRpcClient.createUser({
      email: req.body.email,
      password: req.body.password
    });
    return {};
  };
}
