import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoModel } from '../models/producto.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

private url = 'https://localhost:44317';


  crearProducto(Item: any){
    
    return this.http.get<any>(`${this.url}/api/Producto/PostProducto/${Item.nombre}/${Item.codigo}/${Item.descripcion}/${Item.precio}/${Item.cantidad}`);
  }

  getProducto(){
    return this.http.get(`${this.url}/api/Producto`).pipe(
map(resp => this.crearArreglo(resp))
    );
  }

  private crearArreglo(ProductoObj: object){

    const productos: ProductoModel[] = [];

console.log(ProductoObj);

if(ProductoObj === null){
  return [];
}

Object.keys(ProductoObj).forEach(key => {
const producto: ProductoModel = ProductoObj[key];
productos.push(producto)
});

return productos;
  }
}