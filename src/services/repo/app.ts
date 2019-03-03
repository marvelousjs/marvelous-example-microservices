import { RpcServer } from 'marvelous';

import { CreateRepoAction } from './actions';

export class RepoService extends RpcServer {
  actions = {
    createRepo: CreateRepoAction
  };
}
