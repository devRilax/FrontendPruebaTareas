import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabla-tareas',
  templateUrl: './tabla-tareas.component.html',
  styleUrls: ['./tabla-tareas.component.css']
})
export class TablaTareasComponent implements OnInit {

  @Input() tareas: any[];

  constructor() { }

  ngOnInit() {
  }

}
