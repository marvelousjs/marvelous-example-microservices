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
  properties: {
    id: {
      required: true,
      type: 'string'
    }
  }
};

export const CreateRepoSchema = {
  request,
  response
};
