import { DefaultBean } from '../elastic/default-bean';
export class User extends DefaultBean {
  password?: string;
  _source: {
    name?: string,
    phone?: string,
    login?: string,
    password?: string,

    __proto__?: any,
    _type?: string
  };

  constructor() {
    super();
    this._source = {};
  }
}
