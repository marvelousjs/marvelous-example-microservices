/*
 * this file is automatically generated for marvelous via zappjs
 * any manual changes to this file will be overwritten with the "mvs" command
 */

import * as http from 'http';
import * as url from 'url';

interface IUserServiceClientOpts {
  url: string;
}

interface IUserServiceClient {
  createUser: IUserServiceClientCreateUserFunction;
}

export interface IUserServiceClientCreateUserFunction {
  (request?: IUserServiceClientCreateUserRequest): Promise<IUserServiceClientCreateUserResponse>;
}

export interface IUserServiceClientCreateUserRequest {
  email: string;
  password: string;
}

export interface IUserServiceClientCreateUserResponse {
  id: string;
}


async function handler(req: any = {}, urlString: string = ''): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const reqString = JSON.stringify(req);
      const urlParts = url.parse(urlString);
      
      const input = http.request(
        {
          protocol: urlParts.protocol,
          host: urlParts.hostname,
          port: urlParts.port,
          path: urlParts.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(reqString)
          }
        },
        output => {
          let responseString = '';

          output.on('data', chunk => {
            responseString += chunk;
          });

          output.on('end', () => {
            const response = JSON.parse(responseString) || {};
            if (output.statusCode === 200) {
              resolve(response);
            } else {
              reject(response);
            }
          });
        }
      );
      input.on('error', reject);
      input.write(reqString);
      input.end();
    } catch (error) {
      reject(error);
    }
  });
}

export class UserServiceClient implements IUserServiceClient {
  url = 'http://localhost:5000';

  constructor(opts?: IUserServiceClientOpts) {
    if (opts && opts.url !== undefined) {
      this.url = opts.url;
    }
  }

  createUser: IUserServiceClientCreateUserFunction = async req => {
    return handler(req, `${this.url}/createUser`);
  };
}
