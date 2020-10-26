import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private url = "https://localhost:44317/api/usuario/Login";


  constructor(private http: HttpClient) {


    
  }

  login(correo: string, contrasena: string){

    return this.http.get<any>(`${this.url}?correo=${correo}&contrasena=${contrasena}`);

  }

}
