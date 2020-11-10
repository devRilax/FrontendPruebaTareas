import { Routes } from '../../node_modules/@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InscripcionUsuarioComponent } from './components/inscripcion-usuario/inscripcion-usuario.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { MisTareasComponent } from './components/mis-tareas/mis-tareas.component';



import { CanActivate } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: 'nuevo-usuario', component: InscripcionUsuarioComponent },
  { path: 'nueva-tarea', component: NuevaTareaComponent },
  { path: 'mis-tareas', component: MisTareasComponent }
];
