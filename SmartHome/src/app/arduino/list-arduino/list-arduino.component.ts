import { EditArduinoComponent } from './../edit-arduino/edit-arduino.component';
import { Arduino } from './../../dataModel/arduino';
import { ArduinoService } from './../../services/arduino.service';
import { DefaultController } from './../../elastic/default-controller';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-arduino',
  templateUrl: './list-arduino.component.html',
  styleUrls: ['./list-arduino.component.scss']
})
export class ListArduinoComponent extends DefaultController implements OnInit {

  constructor(protected arduinoService: ArduinoService, public dialog: MatDialog) {
    super(arduinoService, dialog);
  }

  filter: string;

  ngOnInit() {
    this.getAll();
  }

  add(arduino: Arduino) {
    const dialogRef = this.dialog.open(EditArduinoComponent, {
      width: '250px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.arduinoService.save(result).subscribe(
          (sresult: any) => {
            this.getAll();
          }
        );
      }
    });

  }

  edit(arduino: Arduino) {
    console.log(arduino);
    const dialogRef = this.dialog.open(EditArduinoComponent, {
      width: '300px',
      data: arduino
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.arduinoService.save(result).subscribe(
          (sresult: any) => {
            console.log(sresult);
            this.getAll();
          }
        );
      }
    });
  }
}
