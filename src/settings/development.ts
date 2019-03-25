import { ISettings } from '../interfaces';

export const settings: ISettings = {
  gateways: {
    public: {
      url: 'http://localhost:3000'
    },
    private: {
      url: 'http://localhost:3001'
    }
  },
  services: {
    repo: {
      url: 'http://localhost:4000'
    },
    user: {
      url: 'http://localhost:4001'
    }
  }
};
