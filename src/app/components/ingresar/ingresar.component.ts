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
user:any;
  constructor(private usuarioService: UsuarioServiceService, private router: Router) { 
   

  }



  ngOnInit(): void {
    this.user = localStorage.getItem('usuario');

    if(this.user != undefined){
    this.usuarioService.obtenerOpcionesMenu(this.user).subscribe(resp=>{
  
      resp.opciones.forEach(element => {
        console.log(element)
        if(element == 'CARRITO_COMPRA'){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: resp.Message,
            showConfirmButton: false,
            timer: 1500
          }).then(
        xd=>{
    
    
          this.router.navigate(['home']).then(fnl => {
            window.location.reload();
    
          });  
          
        }
      
          );
        }
        if(element == 'MANTENIMIENTO_PRODUCTOS'){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: resp.Message,
            showConfirmButton: false,
            timer: 1500
          }).then(
        xd=>{
          this.router.navigate(['productos']).then(fnl => {
            window.location.reload();
    
          });   
        }
      
          );
        }
      });

    });
  }
  }

login(){

  this.usuarioService.login(this.usuario.correo, this.usuario.contrasena).subscribe(resp => {
    
    if(resp.isOK){
      
      localStorage.setItem('usuario', resp.obj.id );
      this.usuarioService.obtenerOpcionesMenu(resp.obj.id).subscribe(resp=>{
  
        resp.opciones.forEach(element => {
          console.log(element)
          if(element == 'CARRITO_COMPRA'){
            Swal.fire({
              position: 'top-end',
              text: '',
              icon: 'success',
              title: resp.Message,
              showConfirmButton: false,
              timer: 1500
            }).then(
          xd=>{
      
      
            this.router.navigate(['home']).then(fnl => {
              window.location.reload();
      
            });  
            
          }
        
            );
          }
          if(element == 'MANTENIMIENTO_PRODUCTOS'){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: resp.Message,
              showConfirmButton: false,
              timer: 1500
            }).then(
          xd=>{
            this.router.navigate(['productos']).then(fnl => {
              window.location.reload();
      
            });   
          }
        
            );
          }
        });

      });
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Usuario y/o Contraseña incorrectos...',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
    
  });
  
}

}
