import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoModel } from '../../models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

productos: ProductoModel[] = [];
cargando = false;

  constructor(private productoService: ProductosServiceService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.productoService.getProducto().subscribe(resp => {
      console.log(resp)
      this.productos = resp;
      this.cargando = false;
    });
  }

  borrarProducto(producto:ProductoModel, i: number)
  {
Swal.fire({
  title: 'Esta seguro?',
  text: `Esta seguro que desea borrar el producto ${producto.nombre}`,
  showConfirmButton: true,
  showCancelButton: true
}).then( resp => {
if (resp.value){
  this.productos.splice(i, 1);
  this.productoService.borrarProducto(producto.id).subscribe();

}
});
  }


}
