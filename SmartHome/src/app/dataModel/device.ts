import { DefaultModel } from './default-model';
import { DeviceComponent } from './device-component';

export class Device extends DefaultModel {
  // tslint:disable-next-line: variable-name
  _source: {
    name?: string,
    components?: DeviceComponent[],
    type?: string
  };

  constructor() {
    super();
    this._source = {};
    this._source.components = [];
  }
}
