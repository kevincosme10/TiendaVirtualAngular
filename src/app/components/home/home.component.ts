import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoModel } from '../../models/producto.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: ProductoModel[] = [];
  producto: ProductoModel = new ProductoModel();
  cargando = false;


  constructor(private productoService: ProductosServiceService, 
              private router: Router,
              private carritoservices: CarritoService) { 
  
  }

  ngOnInit(): void {

    
    
    let ls = localStorage.getItem('usuario');
    
    if(ls === null ){

      this.router.navigate(['ingresar']); 
    }
    
    this.cargando = true;
    this.getAll();
    
  

  }
  addCarrito(id: any){
   
    this.carritoservices.createCarrito(id).subscribe((resp) => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      }).then(x => {
        this.router.navigate(['carritocompras']);
      });
    }, (error)=> {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al comprar'
      })

 
    });
  }
  
  comprar(id: any){
    this.carritoservices.createCarrito(id).subscribe((resp) => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto comprado con exito',
        showConfirmButton: false,
        timer: 1500
      }).then(x => {
        window.location.reload();
      })
    }, (error)=> {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al comprar'
      })

    });
  }

  getAll(){
    this.productoService.getProducto().subscribe(resp => {
    
      this.productos = resp;
      this.cargando = false;

    });
  }

/*   comprar(producto:ProductoModel, i: number){
    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro que desea comprar el producto "${producto.nombre}" de precio $${producto.precio}`,
      showConfirmButton: true,
      showCancelButton: true
    });
  }
 */
}
