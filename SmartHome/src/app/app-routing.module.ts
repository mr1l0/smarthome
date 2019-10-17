import { UserGuard } from './guards/user-guard';
import { EditConfigComponent } from './config/edit-config/edit-config.component';
import { HomeComponent } from './home/home.component';
import { ListRoomComponent } from './room/list-room/list-room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AdminGuard } from './guards/admin-guard';
import { MyRoomComponent } from './room/my-room/my-room.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', canActivate: [UserGuard], pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'home', canActivate: [UserGuard], component: ListRoomComponent},
  {path: 'rooms', canActivate: [UserGuard], component: ListRoomComponent},
  {path: 'myRoom/:room', canActivate: [UserGuard], component: MyRoomComponent},
  {path: 'config', canActivate: [AdminGuard], component: EditConfigComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
