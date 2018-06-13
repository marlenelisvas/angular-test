import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// formularios
import{FormsModule}  from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
// angular
import {AngularFireModule}  from "angularfire2";
import {AngularFireAuthModule}  from "angularfire2/auth";
//
import { AngularFireDatabase} from 'angularfire2/database';
//database
import {AngularFireDatabaseModule}  from "angularfire2/database";
import {environment} from "../environments/environment";
// flash
import {FlashMessagesModule} from "angular2-flash-messages";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from './servicios/auth.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
      AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,

  ],
  providers: [
    AuthService,AuthGuard, FlashMessagesService, AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
