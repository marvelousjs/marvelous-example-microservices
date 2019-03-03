import { RpcServer } from 'marvelous';

import { CreateUserAction } from './actions';

export class UserRpcServer extends RpcServer {
  actions = {
    createUser: CreateUserAction
  };
}
