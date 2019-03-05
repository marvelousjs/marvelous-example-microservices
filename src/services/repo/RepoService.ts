import { Service } from 'marvelous';

import { CreateRepoCall } from './calls';

export class RepoService extends Service {
  calls = {
    createRepo: CreateRepoCall
  };
}
