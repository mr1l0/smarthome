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

  call(deviceComponent: DeviceComponent) {
    let mudarPara: string;
    if (this.estado) {
      mudarPara = 'HIGH';
      this.estado = !this.estado;
    } else {
      mudarPara = 'LOW';
      this.estado = !this.estado;
    }
    return this.http.post(deviceComponent._source.arduino._source.ip + '/?' + deviceComponent._source.port + '&' + mudarPara, deviceComponent._source, httpOptions);
  }
}
