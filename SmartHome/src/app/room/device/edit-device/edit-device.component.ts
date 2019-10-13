import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from 'src/app/dataModel/device';
import { DefaultEditForm } from 'src/app/elastic/default-edit-form';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent extends DefaultEditForm implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device
  ) {
    super();
  }

  device: Device;

  ngOnInit() {
    if (this.data) {
      this.device = Object.create(this.data);
    } else {
      this.device = new Device();
    }

  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.device);
  }
}
