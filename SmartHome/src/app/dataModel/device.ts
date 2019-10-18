import { DefaultModel } from './default-model';
import { DeviceComponent } from './device-component';

export class Device extends DefaultModel {
  _source: {
    name?: string,
    components?: DeviceComponent[],
    type?: string;
  }

  constructor() {
    super();
    this._source = {};
    this._source.components = [];
  }
}
