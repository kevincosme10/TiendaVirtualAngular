import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private url: string = "https://localhost:44317";

producto: ProductoModel[] = [];

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(`${this.url}/api/CarritoCompra`);

  }

  createCarrito(id: any){

    return this.http.get<any>(`${this.url}/api/CarritoCompra/PostCarrito/${id}`);
  }

  borrarProducto(id: any){
    return this.http.delete<any>(`${this.url}/api/CarritoCompra/PostCarrito/${id}`);
  }
  
}
