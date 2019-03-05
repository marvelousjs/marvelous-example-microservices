import { GatewayOperation } from 'marvelous';

export class PostAuthLoginOperation extends GatewayOperation {
  handler: any = async (req: any) => {
    req.session.isLoggedIn = true;

    return {
      status: 200,
      body: {}
    };
  };
}
