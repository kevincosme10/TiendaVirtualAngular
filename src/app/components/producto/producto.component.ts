import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../models/producto.model';
import { ProductosServiceService } from '../../services/productos-service.service';
import Swal from 'sweetalert2'





@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

producto: ProductoModel = new ProductoModel();

  constructor(private productoService: ProductosServiceService,private router: Router ) { }

  ngOnInit(): void {
  }

  guardar()
  {

    this.productoService.crearProducto(this.producto).subscribe(resp => {
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto insertado con exito',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['productos']);
  
  
    })
   
  }

}
