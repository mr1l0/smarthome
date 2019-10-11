import { Injectable } from '@angular/core';
import { DefaultModel } from './default-model';

@Injectable()
export class Room extends DefaultModel {

  _source: {
    name?: string,
    __proto__?: any,
    _type?: string
  };

constructor() {
  super();
  this._source = {};
}

}
