import { GatewayMethod } from 'marvelous';

import { IAuthLoginRoutePostHandler } from '../../../.auto';
import { AuthLoginRoutePostSchema } from './AuthLoginRoutePost.schema';

export class AuthLoginRoutePost extends GatewayMethod {
  handler: IAuthLoginRoutePostHandler = async (req) => {
    req.session.isLoggedIn = true;

    return {
      statusCode: 200,
      body: {}
    };
  };

  schema = AuthLoginRoutePostSchema;
}
