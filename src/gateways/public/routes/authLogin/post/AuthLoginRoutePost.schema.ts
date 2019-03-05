const request = {
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
};

const response = {
  type: 'object',
  additionalProperties: false,
  properties: {}
};

export const AuthLoginRoutePostSchema = {
  request,
  response
};
