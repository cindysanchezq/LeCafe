import { Component } from '@angular/core';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss']
})
export class ResenasComponent {
  public title :string = 'Lo que piensan nuestros clientes'
  public image : string =  'url("assets/img/header_galeria.jpg")';

}
