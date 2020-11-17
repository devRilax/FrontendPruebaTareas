import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AuthserviceService } from '../authservice.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-inscripcion-usuario',
  templateUrl: './inscripcion-usuario.component.html',
  styleUrls: ['./inscripcion-usuario.component.css']
})
export class InscripcionUsuarioComponent implements OnInit {

  userform: any;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private authService: AuthserviceService,
              private router : Router) { 

    this.userform = this.formBuilder.group({
      nombres: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordrepeat: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  registrar() {

    if(this.userform.$invalid) return;

    const password = this.userform.controls['password'].value;
    const passwordRepeat = this.userform.controls['passwordrepeat'].value;

    if(password != passwordRepeat) {
      alert('Las claves no coinciden');
      return;
    }

    let usuarioPayload = {
      username: this.userform.controls['username'].value,
      nombre:  this.userform.controls['nombres'].value,
      password: this.userform.controls['password'].value
    }

    this.usuarioService.create(usuarioPayload)
    .then( (data: any) => {
      if(data.success) {
        this.authService.saveData(data.Dlata);
        this.router.navigate(["mis-tareas"])
      } else {
        alert(data.data[0]);
      }
    })
    .catch( err => {
      console.log(err)
    })
  }

}
