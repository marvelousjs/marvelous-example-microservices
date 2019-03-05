import { Service } from 'marvelous';

import { CreateUserCall } from './calls';

export class UserService extends Service {
  calls = {
    createUser: CreateUserCall
  };
}
