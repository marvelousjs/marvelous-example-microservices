import { RpcServer } from 'marvelous';

import { CreateUserAction } from './actions';

export class UserService extends RpcServer {
  actions = {
    createUser: CreateUserAction
  };
}
