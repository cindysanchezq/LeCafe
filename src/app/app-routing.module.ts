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
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { PublicGuard } from './guards/public.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    canActivate: [PublicGuard],
  },

  {
    path: 'productos',
    component: ProductosComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'resenas',
    component: ResenasComponent,
    canActivate: [PublicGuard],
  },

  {
    path: 'contacto',
    component: ContactoComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'admin',
    component: DashboardAdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'crear',
    component: CrearProductoComponent,
    canActivate: [AdminGuard],
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
