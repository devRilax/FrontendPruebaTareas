import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'form-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  @Output() nuevatarea = new EventEmitter<any>();


  formTarea: any;
  
  constructor(private formBuilder: FormBuilder,
               private auth: AuthserviceService) { 
          

      this.formTarea = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required]]
      });
  }

  ngOnInit() {
  }

  crear() {

    const usuarioConectado = this.auth.getInfoUser();

    const tarea = {
      nombre: this.formTarea.controls['nombre'].value,
      descripcion: this.formTarea.controls['descripcion'].value,
      activa: false, //pendiente
      usuadioId: usuarioConectado ? usuarioConectado.id : 1
    }

    this.nuevatarea.emit(tarea);

  }


}
