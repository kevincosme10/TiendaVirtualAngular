import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private productoService: ProductosServiceService) { }

  ngOnInit(): void {

    this.productoService.getProducto().subscribe(resp => {
      console.log(resp)
      this.productos = resp;
    });

  }

}
