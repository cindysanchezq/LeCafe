import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './components/shared/info/info.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ResenasComponent } from './pages/resenas/resenas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { InfoNosotrosComponent } from './components/shared/info-nosotros/info-nosotros.component';
import { FormularioComponent } from './components/shared/formulario/formulario.component';
import { CatalogoComponent } from './components/shared/catalogo/catalogo.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    NosotrosComponent,
    ProductosComponent,
    ResenasComponent,
    ContactoComponent,
    InfoNosotrosComponent,
    FormularioComponent,
    CatalogoComponent,
    TestimonialComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
