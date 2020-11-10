import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  Create(tarea) {
    return this.http.post("http://localhost:50461/api/tarea", tarea).toPromise();
  }

  GetByUser(idUser) {
    return this.http.get(`http://localhost:50461/api/tarea?userId=${idUser}`).toPromise();
  }
}
