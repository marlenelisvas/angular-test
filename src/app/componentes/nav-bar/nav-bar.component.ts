import { Component, OnInit } from '@angular/core';
// servicios
import {AuthService}  from "../../servicios/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

public isLogin:boolean;
public userName:string;
public userEmail : string;
public userPhoto : string;
  constructor(
    public authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
          if (auth) {
            this.isLogin = true;
            this.userName = auth.displayName;
            this.userEmail = auth.email;
           this.userPhoto = auth.photoURL;
          } else {
            this.isLogin = false;
          }
        });
  }

  OnClickLogout(){
    this.authService.logout();
  }
}
