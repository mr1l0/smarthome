import { DefaultBean } from './../elastic/default-bean';
import { Router } from '@angular/router';
import { DefaultElasticService } from './default.service';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../dataModel/user';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DefaultElasticService {

  constructor(protected http: HttpClient, private router: Router) {
    super(http);
  }

  private usuarioLogado: boolean = false;

  public showMenuEmitter = new EventEmitter<boolean>();

  md5 = new Md5();

  beforeSave(user: User) {
    if (user.password) {
      user._source.password = this.md5.start().appendStr(user.password).end() + '';
    }
    super.beforeSave(user);
  }

  getUrl(): string {
    return super.getUrl() + 'common/users';
  }

  getUser(user: User) {
    return this.http.post(this.getUrl() + '/_search', '{"from" : 0, "size" : 10000, "query": {"match": {"login": "' + user._source.login + '"}}}', this.httpOptions);
  }

  auth(user: User) {
    this.getUser(user).subscribe((result: any) => {
      const userDB: User = result.hits.hits[0];
      if (userDB._source.login === user._source.login &&
        userDB._source.password === this.md5.start().appendStr(user._source.password).end()) {
          this.executarLogin();
      }
    });
  }

  executarLogin() {
    this.showMenuEmitter.emit(true);
    this.usuarioLogado = true;
    this.router.navigate(['/']);
  }

  logout() {
    this.usuarioLogado = false;
    this.showMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }

  loggedIn(): boolean{
    return this.usuarioLogado;
  }
}
