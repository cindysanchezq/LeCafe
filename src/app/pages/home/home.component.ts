import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string = 'Disfruta una deliciosa taza de café';
  public image: string = 'url("assets/img/header_inicio.jpg")';
}
