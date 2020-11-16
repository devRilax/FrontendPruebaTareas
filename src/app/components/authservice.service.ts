import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  auth(user)  {
     return this.http.post('http://localhost:50461/api/auth', user).toPromise();
  }

  saveData(user) {
    sessionStorage.setItem('infoUsuario', JSON.stringify(user));
  }

  getInfoUser() {
    const data = sessionStorage.getItem('infoUsuario');
    return (!data || data === 'undefined') ? null :  JSON.parse(sessionStorage.getItem('infoUsuario'));
  }
}
