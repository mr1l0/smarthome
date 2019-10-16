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

  getRoom(idRoom: string) { 
    return this.http.get(this.getUrl() + '/' + idRoom, this.httpOptions)
  }

  getUrl(): string {
    return super.getUrl() + 'home/rooms';
  }
}
