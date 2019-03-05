const request = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
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

export const PostAuthLoginSchema = {
  request,
  response
};
