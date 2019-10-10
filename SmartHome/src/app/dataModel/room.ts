import { Injectable } from '@angular/core';
import { DefaultBean } from '../elastic/default-bean';

@Injectable()
export class Room extends DefaultBean {

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
