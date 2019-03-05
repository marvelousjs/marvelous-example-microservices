import { PrivateGateway, PublicGateway } from './gateways';
import { RepoService, UserService } from './services';

import {
  initData as initRepoData,
  saveData as saveRepoData
} from './services/repo/RepoData';
import {
  initData as initUserData,
  saveData as saveUserData
} from './services/user/UserData';

// create services
export const repoService = new RepoService({
  url: 'http://localhost:3003'
});
export const userService = new UserService({
  url: 'http://localhost:3002'
});

// create gateways
export const publicGateway = new PublicGateway({
  url: 'http://localhost:3000'
});
export const privateGateway = new PrivateGateway({
  url: 'http://localhost:3001'
});

(async () => {
  await initRepoData();
  await initUserData();

  setInterval(async () => {
    await saveRepoData();
    await saveUserData();
  }, 1000 * 5);

  await repoService.start(() => console.log('Started Repo Service...'));
  await userService.start(() => console.log('Started User Service...'));

  await publicGateway.start(() => console.log('Started Public Gateway...'));
  await privateGateway.start(() => console.log('Started Private Gateway...'));
})();