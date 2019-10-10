import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultElasticService } from './default.service';

@Injectable({
  providedIn: 'root'
})

export class RoomService extends DefaultElasticService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getUrl(): string {
    return super.getUrl() + 'home/rooms';
  }
}
