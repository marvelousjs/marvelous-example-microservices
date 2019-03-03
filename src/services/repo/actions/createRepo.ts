import { RpcAction } from 'marvelous';

import { ICreateRepoHandler } from '../.auto'
import { getData } from '../data';

export class CreateRepoAction extends RpcAction {
  handler: ICreateRepoHandler = async (request?) => {
    const data = getData();

    // create a user
    const newUser = data.repos.create({
      name: request.name
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
        name: {
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
