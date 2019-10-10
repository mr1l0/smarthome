import { MatDialog } from '@angular/material/dialog';
import { RoomService } from '../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/dataModel/room';
import { EditRoomComponent } from '../edit-room/edit-room.component';
import { DefaultController } from 'src/app/elastic/default-controller';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent extends DefaultController implements OnInit {

  constructor(protected roomService: RoomService, public dialog: MatDialog) {
    super(roomService, dialog) ;
  }

  ngOnInit() {
    this.getAll();
  }

  open(room: Room) {

  }

  add(): void {
    const dialogRef = this.dialog.open(EditRoomComponent, {
      width: '250px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roomService.save(result).subscribe(
          (sresult: any) => {
            this.getAll();
          }
        );
      }
    });
  }

  edit(room: Room) {
    console.log(room);
    const dialogRef = this.dialog.open(EditRoomComponent, {
      width: '250px',
      data: room
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roomService.save(result).subscribe(
          (sresult: any) => {
            console.log(sresult);
            this.getAll();
          }
        );
      }
    });
  }

}
