import { DefaultModel } from './default-model';
import { Arduino } from './arduino';
export class DeviceComponent extends DefaultModel {

  _source: {
    name?: string,
    arduino?: Arduino,
    port?: BigInteger,
    get?: any,
    set?: any
  }

  constructor() {
    super();
    this._source = {};
  }
}
