const request = {
  body: {
    type: 'object',
    additionalProperties: false,
    properties: {
      email: {
        required: true,
        type: 'string'
      },
      password: {
        required: true,
        type: 'string'
      }
    }
  }
};

const response = {
  body: {
    type: 'object',
    additionalProperties: false,
    properties: {
      id: {
        required: true,
        type: 'string'
      }
    }
  }
};

export const UsersRoutePostSchema = {
  request,
  response
};
