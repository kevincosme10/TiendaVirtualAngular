import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import Swal from 'sweetalert2';
import { NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { ProductoModel } from '../../models/producto.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent implements OnInit {

producto: ProductoModel = new ProductoModel();
id: any;

  constructor(private productoService: ProductosServiceService, 
              private router: Router,
              public activemodal: NgbActiveModal,
              protected _http: HttpClient) { }

  ngOnInit(): void {
    if(this.id){
      this.productoService.getByid(this.id).subscribe((res) => {this.producto = res; console.log(res)});
    }
  }
  
  save(){
    if(this.validate()){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Se deben de llenar todos los campos'
      })
    }
    this.add();

  }
  add(){

    this.productoService.actualizarProducto(this.producto).subscribe((res) => {
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Modificado',
        showConfirmButton: false,
        timer: 1500
      })
      
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error'
      })
    });
   this.activemodal.close();
  }

  validate(){ return (!this.producto.codigoProducto || !this.producto.nombre || !this.producto.precio || !this.producto.cantidad)}

actualizarProducto(){
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
