import { Service, ValidationServiceError } from 'marvelous';

import { CreateRepoCall } from './calls';

export class RepoService extends Service {
  calls = {
    createRepo: CreateRepoCall
  };
  knownErrors = [
    ValidationServiceError
  ];
}
