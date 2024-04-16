import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  public title:string ='UNA NUEVA EXPERIENCIA CADA DÍA'
  public image: string = 'url("assets/img/header_nosotros.jpg")'
}
