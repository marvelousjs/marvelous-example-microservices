export class AuthError extends Error {
  name = 'AuthError';
  statusCode = 401;
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
