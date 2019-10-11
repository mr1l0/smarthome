import { DefaultModel } from './default-model';
export class User extends DefaultModel {
  password?: string;
  _source: {
    name?: string,
    phone?: string,
    login?: string,
    password?: string,

    admin?: boolean,

    __proto__?: any,
    _type?: string
  };

  constructor() {
    super();
    this._source = {};
  }
}
