import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'ingresar',component: IngresarComponent},
  {path: 'carritocompras',component: CarritoComponent},
  {path: 'producto/:id',component: ProductoComponent},
  { path: '**', redirectTo: 'ingresar', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
