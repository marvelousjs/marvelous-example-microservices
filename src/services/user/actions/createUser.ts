import { RpcAction } from 'marvelous';

import { ICreateUserHandler } from '../.auto'
import { getData } from '../data';

export class CreateUserAction extends RpcAction {
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

  schema = {
    request: {
      type: 'object',
      additionalProperties: false,
      properties: {
        email: {
          required: true,
          type: 'string'
        },
        password: {
          required: true,
          type: 'string'
        }
      }
    },
    response: {
      type: 'object',
      additionalProperties: false,
      properties: {
        id: {
          required: true,
          type: 'string'
        }
      }
    }
  };
}
