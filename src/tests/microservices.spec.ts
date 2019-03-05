import * as assert from 'assert';
import axios from 'axios';

import { PrivateGateway, PublicGateway } from '../gateways';
import { RepoService, UserService } from '../services';

describe('server', () => {
  // create services
  const userService = new UserService({
    url: 'http://localhost:3001'
  });
  const repoService = new RepoService({
    url: 'http://localhost:3002'
  });

  // create gateways
  const privateGateway = new PrivateGateway({
    url: 'http://localhost:3003'
  });
  const publicGateway = new PublicGateway({
    url: 'http://localhost:3004'
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
    // stop gateways
    await privateGateway.stop();
    await publicGateway.stop();

    // stop services
    await repoService.stop();
    await userService.stop();
  });

  it('should create user', async () => {
    // successful login
    const loginResult = await axios({
      method: 'POST',
      url: 'http://localhost:3004/auth/login',
      data: {
        email: 'test@test.com',
        password: 'password'
      }
    });

    assert.strictEqual(loginResult.status, 200);
    assert.deepStrictEqual(loginResult.data, {});

    // registration should fail since user is logged in
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3004/users',
        data: {
          email: 'test@test.com',
          password: 'password'
        },
        headers: {
          cookie: loginResult.headers['set-cookie']
        }
      });

      assert.fail('should throw error');

    } catch (error) {
      assert.strictEqual(error.response.status, 401);
      assert.deepStrictEqual(error.response.data, {
        name: 'AuthError',
        message: 'Guest allowed only'
      });
    }
  });
});
