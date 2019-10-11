import { Injectable } from '@angular/core';
import { DefaultElasticService } from './default.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService extends DefaultElasticService {

  constructor(protected http: HttpClient) { 
    super(http);
  }

  getUrl(): string {
    return super.getUrl() + 'common/arduinos'
  }
}
