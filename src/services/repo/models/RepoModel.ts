import { IModel, Model, AttributeTypes as Types } from 'jazzdb';

export interface IRepoModel extends IModel {
  name: string;
}

export class RepoModel extends Model {
  name = 'repos';
  attributes = {
    name: { required: true, type: Types.String }
  };

  async load(): Promise<RepoModel> {
    return super.load();
  }
  async save(): Promise<RepoModel> {
    return super.save();
  }
  create(data: IRepoModel): IRepoModel {
    return super.create(data);
  }
  delete(id: string): IRepoModel {
    return super.delete(id);
  }
  get(id: string): IRepoModel {
    return super.get(id);
  }
  toArray(): IRepoModel[] {
    return super.toArray();
  }
  update(id: string, data: IRepoModel): IRepoModel {
    return super.update(id, data);
  }
}
