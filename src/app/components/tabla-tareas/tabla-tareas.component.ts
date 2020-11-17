import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tabla-tareas',
  templateUrl: './tabla-tareas.component.html',
  styleUrls: ['./tabla-tareas.component.css']
})
export class TablaTareasComponent implements OnInit {

  @Input() tareas: any[];
  @Output() completar = new EventEmitter<any>();

  listadoTareas: any[];

  constructor() { }


  ngOnInit() {
  }

  onCompletar(tarea) {
    tarea.finalizada = true;
    this.completar.emit(tarea);
  }

}
