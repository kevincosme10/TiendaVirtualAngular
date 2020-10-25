import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

productos: ProductoModel[] = [];

  constructor(private productoService: ProductosServiceService) { }

  ngOnInit(): void {
    this.productoService.getProducto().subscribe(resp => {
      console.log(resp)
      this.productos = resp;
    });
  }

}
