import * as assert from 'assert';

import { PrivateGateway, PublicGateway } from '../gateways';
import { PrivateGatewayClient } from '../gateways/private/.auto/clients/src';
import { PublicGatewayClient } from '../gateways/public/.auto/clients/src';
import { RepoService, UserService } from '../services';

import { settings } from '../settings';

describe('server', () => {
  // create services
  const repoService = new RepoService({
    url: settings.services.repo.url
  });
  const userService = new UserService({
    url: settings.services.user.url
  });

  // create gateways
  const privateGateway = new PrivateGateway({
    url: settings.gateways.private.url
  });
  const publicGateway = new PublicGateway({
    url: settings.gateways.public.url
  });

  // create gateway clients
  const privateGatewayClient = new PrivateGatewayClient({
    url: settings.gateways.private.url
  });
  const publicGatewayClient = new PublicGatewayClient({
    url: settings.gateways.public.url
  });
  
  before(async () => {
    // start services
    await repoService.start();
    await userService.start();

    // start gateways
    await privateGateway.start();
    await publicGateway.start();
  });

  after(async () => {
    // // stop gateways
    await privateGateway.stop();
    await publicGateway.stop();

    // // stop services
    await repoService.stop();
    await userService.stop();
  });

  it('should create user via public gateway', async () => {
    const result = await publicGatewayClient['/users'].post({
      body: {
        email: 'test@test.com',
        password: 'password1'
      }
    });
    assert.strictEqual(result.statusCode, 201);
    assert.strictEqual(typeof result.body.id, 'string');
  });

  it('should create user via private gateway', async () => {
    const result = await privateGatewayClient['/users'].post({
      body: {
        email: 'test@test.com',
        password: 'password1'
      }
    });
    assert.strictEqual(result.statusCode, 201);
    assert.strictEqual(typeof result.body.id, 'string');
  });
});
