import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/dataModel/user';
import { DefaultEditForm } from 'src/app/elastic/default-edit-form';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent extends DefaultEditForm implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, private roomService: UserService) {
      super();
  }

  user: User;

  ngOnInit() {
    if (this.data) {
      this.user = Object.create(this.data);
    } else {
      this.user = new User();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.user);
  }

}
