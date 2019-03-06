import { Service, ValidationServiceError } from 'marvelous';

import { CreateRepoCall } from './calls';

export class RepoService extends Service {
  knownErrors = [
    ValidationServiceError
  ];
  calls = {
    createRepo: CreateRepoCall
  };
}
