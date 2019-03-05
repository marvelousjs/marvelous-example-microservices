import { ServiceCall } from 'marvelous';

import { ICreateRepoHandler } from '../../.auto'
import { getData } from '../../RepoData';
import { CreateRepoSchema } from './createRepo.schema';

export class CreateRepoCall extends ServiceCall {
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

  schema = CreateRepoSchema;
}
