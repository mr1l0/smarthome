import { MatDialog } from '@angular/material/dialog';
import { RoomService } from '../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/dataModel/room';
import { EditRoomComponent } from '../edit-room/edit-room.component';
import { DefaultController } from 'src/app/elastic/default-controller';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent extends DefaultController implements OnInit {

  constructor(protected roomService: RoomService, public dialog: MatDialog, private userService: UserService, private route: Router) {
    super(roomService, dialog) ;
  }

  ngOnInit() {
    this.getAll();
  }

  open(room: Room) {
    this.route.navigate(['/myRoom/' + room._id]);
  }

  add(): void {
    const dialogRef = this.dialog.open(EditRoomComponent, {
      width: '450px',
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
      width: '450px',
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
