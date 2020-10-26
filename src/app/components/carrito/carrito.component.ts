import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { carritoCompraModel } from '../../models/carrito.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'carritocompras',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

carrito: carritoCompraModel[] = [];


  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.carritoService.getAll().subscribe( resp => {
this.carrito = resp;

    });
  }
  
  borrarProducto(carrito:carritoCompraModel, i: number)
  {
Swal.fire({
  title: 'Esta seguro?',
  text: `Esta seguro que desea borrar el producto ${carrito.nombre}`,
  showConfirmButton: true,
  showCancelButton: true
}).then( resp => {
if (resp.value){
  this.carrito.splice(i, 1);
  this.carritoService.borrarProducto(carrito.id).subscribe();

}
});
  }

  regresarAComprar(){
    this.router.navigate(['home']);
  }

  comprar(){
  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Productos comprados',
      showConfirmButton: false,
      timer: 1500
    });
  
  }


}
