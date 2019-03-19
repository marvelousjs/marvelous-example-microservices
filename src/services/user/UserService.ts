import { Service, ValidationServiceError } from 'marvelous';

import { CreateUserCall } from './calls';
import { UserActivationJob } from './jobs';

export class UserService extends Service {
  knownErrors = [
    ValidationServiceError
  ];
  calls = {
    createUser: CreateUserCall
  };
  jobs = [
    UserActivationJob
  ];
}
