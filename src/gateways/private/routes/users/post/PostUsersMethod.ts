import { GatewayMethod } from 'marvelous';

// from user service
import { UserServiceClient } from '../../../../../services/user/.auto/clients/src';
import { settings } from '../../../../../settings';
import { IUsersRoutePostHandler } from '../../../../public/.auto';

export class UsersRoutePost extends GatewayMethod {
  handler: IUsersRoutePostHandler = async (req) => {
    const userServiceClient = new UserServiceClient({
      url: settings.services.user.url
    });
    const result = await userServiceClient.createUser({
      email: req.body.email,
      password: req.body.password
    });
    return {
      statusCode: 201,
      body: {
        id: result.id
      }
    };
  };
}
