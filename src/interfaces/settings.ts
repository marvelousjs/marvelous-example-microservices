export interface ISettings {
  gateways: {
    public: IGateway;
    private: IGateway;
  };
  services: {
    repo: IService;
    user: IService;
  };
}

export interface IGateway {
  url: string;
}

export interface IService {
  url: string;
}
