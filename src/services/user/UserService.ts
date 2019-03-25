import { Service, ValidationServiceError } from 'marvelous';

import { CreateUserCall } from './calls';
import { UserActivationJob } from './jobs';

export class UserService extends Service {
  calls = {
    createUser: CreateUserCall
  };
  jobs = [
    UserActivationJob
  ];
  knownErrors = [
    ValidationServiceError
  ];
}
