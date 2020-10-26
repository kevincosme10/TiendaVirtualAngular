import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

carritoCompra: boolean = false;
MantenimientoProductos: boolean = false;
user:any;
  constructor(private usuarioService: UsuarioServiceService, private router: Router) { }

  ngOnInit(): void {

    this.user = localStorage.getItem('usuario');

    if(this.user != undefined){
      this.usuarioService.obtenerOpcionesMenu(this.user).subscribe(resp=>{

        resp.opciones.forEach(element => {
          console.log(element)
          if(element == 'CARRITO_COMPRA'){
            this.carritoCompra= true;
          }
          if(element == 'MANTENIMIENTO_PRODUCTOS'){
            this.MantenimientoProductos= true;
          }
        });

      });
    }

  }

  logout(){
    if(this.user == undefined)
    {
      return;
    }else{
      localStorage.removeItem('usuario');
      this.router.navigate(['ingresar']);
    }

  }

}
