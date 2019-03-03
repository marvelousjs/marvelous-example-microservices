import { PrivateGateway } from './gateways/private/app';
import { PublicGateway } from './gateways/public/app';

import { RepoService } from './services/repo/app';
import { UserService } from './services/user/app';

// create services
export const repoService = new RepoService({
  url: 'http://localhost:3001'
});
export const userService = new UserService({
  url: 'http://localhost:3002'
});

// create gateways
export const privateGateway = new PrivateGateway({
  url: 'http://localhost:3003'
});
export const publicGateway = new PublicGateway({
  url: 'http://localhost:3004'
});
