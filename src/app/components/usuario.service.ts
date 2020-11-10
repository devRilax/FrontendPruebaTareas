import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  create(user) {
    return this.http.post('http://localhost:50461/api/usuario', user).toPromise();
  }
}
