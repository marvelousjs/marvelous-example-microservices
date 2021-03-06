/*
 * this file is automatically generated for marvelous via zappjs
 * any manual changes to this file will be overwritten with the "mvs" command
 */

export interface IUsersRoutePostHandler {
  (request?: IUsersRoutePostRequest): Promise<IUsersRoutePostResponse>;
}

export interface IUsersRoutePostRequest {
  body: IUsersRoutePostRequestBody;
  session: any;
}

export interface IUsersRoutePostResponse {
  statusCode: number;
  body: IUsersRoutePostResponseBody;
}

export interface IUsersRoutePostRequestBody {
  email: string;
  password: string;
}

export interface IUsersRoutePostResponseBody {
  id: string;
}

