import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ResenasComponent } from './pages/resenas/resenas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ComponentFixture } from '@angular/core/testing';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },

  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'resenas',
    component: ResenasComponent
  },

  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },

  {
    path:'admin',
    component:DashboardAdminComponent
  },
  {
    path:'editar',
    component:EditarComponent
  },
  {
    path:'crear',
    component:CrearProductoComponent
  },
  
  {
    path: '**',
    redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
