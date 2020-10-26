import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from './services/usuario-service.service';
import { usuarioModel } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TiendaVirtual';

  usuario: usuarioModel = new usuarioModel();
  menu: boolean = false;
  


  constructor(private usuarioService: UsuarioServiceService)
  {}

  ngOnInit(): void {
    
    var ls = localStorage.getItem('usuario');
    console.log(ls)
    if(ls != undefined){
      this.menu = true;
    }
  }
/* 
  mostrarMenu(){
    this.usuarioService.login(this.usuario.correo, this.usuario.contrasena).subscribe(resp => 
      {
        if(resp.isOK){
      
          localStorage.setItem('usuario', resp.obj.id );
      }
  })


} */

}
