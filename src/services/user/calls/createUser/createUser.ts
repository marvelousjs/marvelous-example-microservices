import { ServiceCall } from 'marvelous';

import { ICreateUserHandler } from '../../.auto'
import { getData } from '../../UserData';
import { CreateUserSchema } from './createUser.schema';

export class CreateUserCall extends ServiceCall {
  handler: ICreateUserHandler = async (request?) => {
    const data = getData();

    // create a user
    const newUser = data.users.create({
      email: request.email,
      password: request.password
    });

    return {
      id: newUser._id
    };
  };

  schema = CreateUserSchema;
}
