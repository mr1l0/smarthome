import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';
import { EditComponentComponent } from '../edit-component/edit-component.component';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  constructor(
    protected userService: UserService,
    public dialog: MatDialog
  ) { }

  filter: string;
  @Input() components: Component[];

  ngOnInit() {
    if(!this.components){
      this.components = [];
    }
  }


  add(): void {
    const dialogRef = this.dialog.open(EditComponentComponent, {
      width: '250px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.components.push(result);
      }
    });
  }

  edit(component: Component) {
    console.log(component);
    const dialogRef = this.dialog.open(EditComponentComponent, {
      width: '250px',
      data: component
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let editedDevice = this.components.find((r: any) => r._id = result._id);
        editedDevice = result;
      }
    });
  }
}
