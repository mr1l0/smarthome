import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/dataModel/room';
import { RoomService } from 'src/app/services/room.service';
import { Device } from 'src/app/dataModel/device';
import { CallHardwareService } from 'src/app/services/call-hardware.service';

const HIGH = 'HIGH';
const LOW = 'LOW';

@Component({
  selector: 'app-my-room',
  templateUrl: './my-room.component.html',
  styleUrls: ['./my-room.component.scss']
})
export class MyRoomComponent implements OnInit {

  constructor(
    protected roomService: RoomService,
    protected myRoute: ActivatedRoute,
    protected callHardwareService: CallHardwareService
  ) {

  }

  room: Room = new Room();

  ngOnInit() {
    this.myRoute.params.subscribe(params => {
      if (params['room']) {
        this.roomService.getRoom(params['room']).subscribe((result: any) => {
          console.log(result);
          this.room = result;
        });
      }
    });
  }

  execute(device: Device) {
    device._source.components[0]._source.set = HIGH;
    this.callHardwareService.call(device._source.components[0]).subscribe(result => {
      console.log('deu certo');
      console.log(result);
    });
  }
}
