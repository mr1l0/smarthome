import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha casa inteligente';

  showMenu: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.showMenuEmitter.subscribe(show => this.showMenu = show);
  }

  logout() {
    this.userService.logout();
  }
}
