import { RestOperation } from 'marvelous';

export class LoginOperation extends RestOperation {
  handler: any = async (req: any) => {
    req.session.isLoggedIn = true;

    return {
      status: 200,
      body: {}
    };
  };
}
