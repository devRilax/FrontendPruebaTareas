import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MisTareasComponent } from './components/mis-tareas/mis-tareas.component';  
import { TablaTareasComponent } from './components/tabla-tareas/tabla-tareas.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { InscripcionUsuarioComponent } from './components/inscripcion-usuario/inscripcion-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    TablaTareasComponent,
    LoginComponent,
    NuevaTareaComponent,
    InscripcionUsuarioComponent,
    MisTareasComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
