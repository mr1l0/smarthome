import { DefaultModel } from './default-model';

export class Arduino extends DefaultModel {
  _source: {
      name?: string,
      ip?: string,
      __proto__?: any,
      _type?: string
    };

  constructor() {
    super();
    this._source = {};
  }
}
