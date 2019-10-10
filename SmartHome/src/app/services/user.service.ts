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
    //this.executarLogin();
    this.getUser(user).subscribe((result: any) => {
      const userDB: User = result.hits.hits[0];
      if (result.hits.hits.length == 0) {
        this.getAll().subscribe((iresult: any) => {
          if (iresult.hits.hits.length == 0) {
            let admin: User = new User();
            admin._source.login = 'admin';
            admin._source.name = "Administrador";
            admin._source.password = this.md5.start().appendStr('admin').end() + '';
            this.save(admin).subscribe(result => console.log(result));
            console.log('Nenhum usuário identificado. Criando usuário administrador do sistema');    
          }
        })
      }

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
