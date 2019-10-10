import { EditUserComponent } from './../edit-user/edit-user.component';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dataModel/user';
import { MatDialog } from '@angular/material';
import { DefaultController } from 'src/app/elastic/default-controller';
import { Room } from 'src/app/dataModel/room';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent extends DefaultController implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog) {
    super(userService, dialog);
   }

  users: User[];
  filter: string;

  ngOnInit() {
    this.getAll();
  }

  add(user: User) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '250px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.save(result).subscribe(
          (sresult: any) => {
            this.getAll();
          }
        );
      }
    });

  }

  edit(user: User) {
    console.log(user);
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.save(result).subscribe(
          (sresult: any) => {
            console.log(sresult);
            this.getAll();
          }
        );
      }
    });
  }
}
