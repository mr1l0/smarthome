import { Arduino } from './../../dataModel/arduino';
import { Component, OnInit, Inject } from '@angular/core';
import { DefaultEditForm } from 'src/app/elastic/default-edit-form';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/dataModel/user';

@Component({
  selector: 'app-edit-arduino',
  templateUrl: './edit-arduino.component.html',
  styleUrls: ['./edit-arduino.component.scss']
})
export class EditArduinoComponent extends DefaultEditForm implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditArduinoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
      super();
  }

  arduino: Arduino;

  ngOnInit() {
    if (this.data) {
      this.arduino = Object.create(this.data);
    } else {
      this.arduino = new Arduino();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.arduino);
  }
}
