import { loadData } from 'jazzdb';

import { RepoModel } from './models';

export interface IData {
  repos: RepoModel;
}

let data: IData = {
  repos: new RepoModel()
};

export function getData() {
  return data;
}

export async function initData() {
  data = await loadData({
    path: `./data/${process.env.NODE_ENV}`,
    models: {
      repos: RepoModel
    }
  });
  return data;
}

export async function saveData() {
  await data.repos.save();
  return data;
}
