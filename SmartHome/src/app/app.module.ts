import { UserService } from 'src/app/services/user.service';
import { browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { MatInputModule, MatFormFieldModule, MatMenuModule, MatIconModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatAutocompleteModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { ListRoomComponent } from './room/list-room/list-room.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditConfigComponent } from './config/edit-config/edit-config.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { UserGuard } from './guards/user-guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminGuard } from './guards/admin-guard';
import { EditArduinoComponent } from './arduino/edit-arduino/edit-arduino.component';
import { ListArduinoComponent } from './arduino/list-arduino/list-arduino.component';
import { ListDeviceComponent } from './room/device/list-device/list-device.component';
import { EditDeviceComponent } from './room/device/edit-device/edit-device.component';
import { ListComponentComponent } from './room/devvice/component/list-component/list-component.component';
import { EditComponentComponent } from './room/devvice/component/edit-component/edit-component.component';
import { MyRoomComponent } from './room/my-room/my-room.component';
import { DeviceFactoryComponent } from './viewFactory/device-factory/device-factory.component';
import { LightComponent } from './viewFactory/devices/light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    EditRoomComponent,
    ListRoomComponent,
    HomeComponent,
    PageNotFoundComponent,
    EditConfigComponent,
    EditUserComponent,
    ListUserComponent,
    LoginFormComponent,
    EditArduinoComponent,
    ListArduinoComponent,
    ListDeviceComponent,
    EditDeviceComponent,
    ListComponentComponent,
    EditComponentComponent,
    MyRoomComponent,
    DeviceFactoryComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EditRoomComponent,
    EditUserComponent,
    EditArduinoComponent,
    EditDeviceComponent,
    EditComponentComponent
  ],
  providers: [UserService, UserGuard, AdminGuard, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
              { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
