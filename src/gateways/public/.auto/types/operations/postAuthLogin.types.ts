/*
 * this file is automatically generated for marvelous via zappjs
 * any manual changes to this file will be overwritten with the "mvs" command
 */

export interface IPostAuthLoginHandler {
  (request?: IPostAuthLoginRequest): Promise<IPostAuthLoginResponse>;
}

export interface IPostAuthLoginRequest {
  body: IPostAuthLoginRequestBody;
}

export interface IPostAuthLoginResponse {
  body: IPostAuthLoginResponseBody;
}

export interface IPostAuthLoginRequestBody {
  name: string;
}

export interface IPostAuthLoginResponseBody {
  id: string;
}
