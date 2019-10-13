import { RoomService } from '../../services/room.service';
import { Room } from '../../dataModel/room';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DefaultEditForm } from 'src/app/elastic/default-edit-form';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent extends DefaultEditForm implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private roomService: RoomService
  ) {
    super();
  }

  room: Room;

  ngOnInit() {
    if (this.data) {
      this.room = Object.create(this.data);
    } else {
      this.room = new Room();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.room);
  }

}
