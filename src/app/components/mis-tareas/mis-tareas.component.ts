import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.component.html',
  styleUrls: ['./mis-tareas.component.css']
})
export class MisTareasComponent implements OnInit {

  infoUsuario = null;
  
  constructor(private tareaService: TareaService, 
              private auth: AuthserviceService) { }

  misTareas = []

  ngOnInit() {
    this.infoUsuario = this.auth.getInfoUser();
    this.get();
  }

  get() {

    if(!this.infoUsuario) return;

    this.tareaService.GetByUser(this.infoUsuario.id)
    .then((data: any[]) => {
      if(data && data.length > 0) {
        this.misTareas = data.map( tarea => {
          return {
            id: tarea.id,
            nombre: tarea.Nombre,
            descripcion: tarea.Descripcion,
            descripcionEstado: tarea.Activa ? 'Resuelta' : 'No resuelta'
          }
        });
      }
    });
  }

  crear(tarea) {
    this.tareaService.Create(tarea)
    .then((data:any) => {
      if(data.id) {
        this.get();
      }
    })
  }

}
