import { RpcServer } from 'marvelous';

import { CreateRepoAction } from './actions';

export class RepoRpcServer extends RpcServer {
  actions = {
    createRepo: CreateRepoAction
  };
}
