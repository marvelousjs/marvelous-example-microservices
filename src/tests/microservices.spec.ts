import * as assert from 'assert';
import axios from 'axios';

import { PublicRestServer } from '../apis/public/app';
import { PrivateRestServer } from '../apis/private/app';

import { UserRpcServer } from '../services/user/app';
import { RepoRpcServer } from '../services/repo/app';

describe('server', () => {
  // create api servers
  const publicRestServer = new PublicRestServer({
    url: 'http://localhost:3001'
  });
  const privateRestServer = new PrivateRestServer({
    url: 'http://localhost:3002'
  });

  // create rpc servers
  const userRpcServer = new UserRpcServer({
    url: 'http://localhost:3003'
  });
  const repoRpcServer = new RepoRpcServer({
    url: 'http://localhost:3004'
  });

  before(async () => {
    // start rest servers
    await publicRestServer.start();
    await privateRestServer.start();

    // start rpc servers
    await userRpcServer.start();
    await repoRpcServer.start();
  });

  after(async () => {
    // stop rest servers
    await publicRestServer.stop();
    await privateRestServer.stop();

    // stop rpc servers
    await userRpcServer.stop();
    await repoRpcServer.stop();
  });

  it('should create user', async () => {
    // successful login
    const loginResult = await axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/login',
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
        url: 'http://localhost:3001/users',
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
