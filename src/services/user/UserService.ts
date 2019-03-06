import { Service, ValidationServiceError } from 'marvelous';

import { CreateUserCall } from './calls';

export class UserService extends Service {
  knownErrors = [
    ValidationServiceError
  ];
  calls = {
    createUser: CreateUserCall
  };
}
