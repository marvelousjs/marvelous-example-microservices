import { loadData } from 'jazzdb';

import { UserModel } from './models';

export interface IData {
  users: UserModel;
}

let data: IData = {
  users: new UserModel()
};

export function getData() {
  return data;
}

export async function initData() {
  data = await loadData({
    path: `./data/${process.env.NODE_ENV}`,
    models: {
      users: UserModel
    }
  });
  return data;
}

export async function saveData() {
  await data.users.save();
  return data;
}
