import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  public title :string = 'MEJORES GRANOS, MEJOR CAFÉ'
  public image : string =  'url("assets/img/header_contacto.jpg")';

}
