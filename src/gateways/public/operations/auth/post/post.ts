import { GatewayOperation } from 'marvelous';

import { IPostAuthLoginHandler } from '../../../.auto';
import { PostAuthLoginSchema } from './post.schema';

export class PostAuthLoginOperation extends GatewayOperation {
  handler: IPostAuthLoginHandler = async (req) => {
    req.session.isLoggedIn = true;

    return {
      status: 200,
      body: {}
    };
  };

  schema = PostAuthLoginSchema;
}
