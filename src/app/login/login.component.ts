import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Noname } from '../noname';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  noname =new Noname();
  errormessage=''
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
      this._service.loginUserFromRemote(this.noname).subscribe(
        data => {
          console.log("Data received")
          this._router.navigate(['/loginsuccess'])
        },
        error =>{console.log("Exceptioon occured")
        this.errormessage='Bad credentials please enter the correct credentials';
      }
      )
  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
