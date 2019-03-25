import { ISettings } from '../interfaces';

export const settings: ISettings = {
  gateways: {
    public: {
      url: 'http://localhost:6000'
    },
    private: {
      url: 'http://localhost:6001'
    }
  },
  services: {
    repo: {
      url: 'http://localhost:8000'
    },
    user: {
      url: 'http://localhost:8001'
    }
  }
};
