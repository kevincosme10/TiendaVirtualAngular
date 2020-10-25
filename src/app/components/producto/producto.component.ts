import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../models/producto.model';
import { ProductosServiceService } from '../../services/productos-service.service';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

producto: ProductoModel = new ProductoModel();

  constructor(private productoService: ProductosServiceService) { }

  ngOnInit(): void {
  }

  guardar()
  {
    this.productoService.crearProducto(this.producto).subscribe(resp => {console.log(resp);})
  }

}
