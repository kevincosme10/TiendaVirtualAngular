import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoModel } from '../../models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private productoService: ProductosServiceService, private router: Router) { }

  ngOnInit(): void {

    let ls = localStorage.getItem('usuario');

    if(ls === null ){
      this.router.navigate(['ingresar']); 
    }

    this.productoService.getProducto().subscribe(resp => {
      console.log(resp)
      this.productos = resp;
    });

  }

}
