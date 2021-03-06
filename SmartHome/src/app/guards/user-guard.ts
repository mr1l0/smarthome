import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DefaultGuard } from './default-guard';

@Injectable({
  providedIn: 'root'
})
export class UserGuard extends DefaultGuard {

  constructor(protected userService: UserService,
    protected router: Router) {
      super(userService, router);
     }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.userService.loggedIn()) {
      return super.canActivate(route, state);
    }
    this.router.navigate(['/login']);
  }

}
