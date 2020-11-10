import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthserviceService,  
              private router : Router,
) { }

  
  showLoading: boolean = false
  username: string;
  password: string;

  ngOnInit() {
  }

  auth() {
    this.showLoading = true

     let usuario = {
       username: this.username,
       password: this.password
     }

    this.authService.auth(usuario)
      .then( ( response: any ) => {
        if(response) {
          //this.authService.saveData();
          this.router.navigate(["mis-tareas"])
        } else {
        }
        this.showLoading = false
      },
      ( error : any) => {
        this.showLoading = false
      } )
  }

  singup() {
    this.router.navigate(["nuevo-usuario"])
  }


}
