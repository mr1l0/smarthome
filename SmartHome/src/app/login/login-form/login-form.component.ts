import { EventEmitter } from 'events';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dataModel/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User = new User();

  ngOnInit() {

  }


  submit() {
    this.userService.auth(this.user);
  }
}
