import { Arduino } from './../../../../dataModel/arduino';
import { ArduinoService } from './../../../../services/arduino.service';
import { DeviceComponent } from './../../../../dataModel/device-component';
import { DefaultEditForm } from './../../../../elastic/default-edit-form';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent extends DefaultEditForm implements OnInit {

  myControl = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<EditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeviceComponent,
    protected arduinoService: ArduinoService
  ) {
    super();
  }
  component: DeviceComponent;
  arduinos: Arduino[];

  ngOnInit() {
    this.arduinoService.getAll().subscribe(
      (result: any) => {
        this.arduinos = result.hits.hits;
      }
    );

    if (this.data) {
      this.component = Object.create(this.data);
    } else {
      this.component = new DeviceComponent();
    }
  }

  submit() {
    this.component._source.arduino = this.myControl.value;
    this.dialogRef.close(this.component);
  }

  cancel() {
    this.dialogRef.close();
  }
}
