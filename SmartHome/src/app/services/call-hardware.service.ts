import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceComponent } from '../dataModel/device-component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
    })
};

@Injectable({
  providedIn: 'root'
})
export class CallHardwareService {

  constructor(protected http: HttpClient) { }

  estado: boolean;

  read(deviceComponent: DeviceComponent) {
    const URL = deviceComponent._source.arduino._source.ip + 
      '/?' + deviceComponent._source.port + '-'
      '&READ';
    return this.http.post(URL, deviceComponent._source, httpOptions);
  }

  call(deviceComponent: DeviceComponent) {
    const URL = deviceComponent._source.arduino._source.ip + 
      '/?' + deviceComponent._source.port + '-' + '&' + deviceComponent._source.set;   
    console.log(URL);
    return this.http.post(URL, deviceComponent._source, httpOptions);
  }
}
