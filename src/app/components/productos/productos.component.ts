import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoModel } from '../../models/producto.model';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { UpdateProductoComponent } from '../update-producto/update-producto.component';
import { config } from 'process';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

productos: ProductoModel[] = [];
cargando = false;

  constructor(private productoService: ProductosServiceService,
    public modalservices: NgbModal
                 ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.getAll();
   
  }

editProducto(id: any){
var modal = this.modalservices.open(UpdateProductoComponent);
modal.componentInstance.id = id;
modal.componentInstance.notifyParent.subscribe((res) => {this.getAll();});

}

getAll(){
  this.productoService.getProducto().subscribe(resp => {
  
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
