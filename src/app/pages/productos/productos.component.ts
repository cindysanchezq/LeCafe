import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  public title :string = 'DISFRUTA LA VARIEDAD DE NUESTROS PRODUCTOS'
  public image : string =  'url("assets/img/header_menu.jpg")';

}
