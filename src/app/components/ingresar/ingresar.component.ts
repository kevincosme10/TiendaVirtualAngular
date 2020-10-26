import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioModel } from '../../models/usuario.model';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  
usuario: usuarioModel = new usuarioModel();

  constructor(private usuarioService: UsuarioServiceService, private router: Router) { 
   

  }



  ngOnInit(): void {
  }

login(){

  this.usuarioService.login(this.usuario.correo, this.usuario.contrasena).subscribe(resp => {
    
    if(resp.isOK){

      localStorage.setItem('usuario', resp.obj )

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.Message,
        showConfirmButton: false,
        timer: 1500
      }).then(
    xd=>{


  this.router.navigate(['home']);  
    }
  
      );
      
      

    }else{
    }
    
  });
  
}

}
