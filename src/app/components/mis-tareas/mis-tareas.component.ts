import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.component.html',
  styleUrls: ['./mis-tareas.component.css']
})
export class MisTareasComponent implements OnInit {

  constructor(private tareaService: TareaService, 
              private auth: AuthserviceService) { }

  misTareas = []

  ngOnInit() {
    this.get();
  }

  get() {
   
    const usuario = this.auth.getInfoUser();
    if(!usuario) return;

    this.tareaService.GetByUser(1)
    .then((data: any[]) => {
      if(data && data.length > 0) {
        this.misTareas = data.map( tarea => {
          return {
            id: tarea.id,
            nombre: tarea.nombre,
            descripcion: tarea.descripcion,
            descripcionEstado: tarea.activa ? 'No resuelta' : 'Resuelta'
          }
        })
      }
    })
  }

  crear(tarea) {
    this.tareaService.Create(tarea)
    .then((data:any) => {
      if(data.data.id) {
        this.get();
      }
    })
  }

}
