import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from "@angular/router";
//FlashMessagesModule
import {FlashMessagesService} from "angular2-flash-messages";
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

public email: string;
public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

// method
onSubmitAAddUser(){
  this.authService.registerUser(this.email,this.password)
  .then((res)=>{
    this.flashMessage.show('Usuario creado correctamente.',{cssClass: 'alert-success', timeout:4000});
    this.router.navigate(['/privado']);
    console.log('BIEN!!');
    console.log(res);
  }).catch((err)=>{
      this.flashMessage.show(err.message,{cssClass: 'alert-danger', timeout:4000});
    console.log(err);
  });
}
}
