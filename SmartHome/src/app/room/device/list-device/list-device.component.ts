import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { Device } from 'src/app/dataModel/device';
import { EditDeviceComponent } from '../edit-device/edit-device.component';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss']
})
export class ListDeviceComponent implements OnInit {

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }
  filter: string;
  @Input() devices: Device[];

  ngOnInit() {
    if(!this.devices){
      this.devices = [];
    }
  }

  add(): void {
    const dialogRef = this.dialog.open(EditDeviceComponent, {
      width: '450px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.devices.push(result);
      }
    });
  }

  edit(device: Device) {
    console.log(device);
    const dialogRef = this.dialog.open(EditDeviceComponent, {
      width: '450px',
      data: device
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let editedDevice = this.devices.find(r => r._id = result._id);
        editedDevice = result;
      }
    });
  }

}
