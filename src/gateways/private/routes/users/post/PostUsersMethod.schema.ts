const request = {
  body: {
    type: 'object',
    additionalProperties: false,
    properties: {
      name: {
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
